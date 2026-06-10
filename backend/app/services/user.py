from app.models.user import User
from app.util.security import hash_password
from app.util.security import verify_password


def create_user(
    db,
    name,
    email,
    password,
    roles
):
    if "SUPER_USER" in roles:
        existing_super = get_super_user(db)
        if existing_super:
            return None

    user = User(
        name=name,
        email=email,
        password=hash_password(password),
        roles=roles
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user


def get_user_by_email(
    db,
    email
):
    return (
        db.query(User)
        .filter(
            User.email == email,
            User.is_deleted == False
        )
        .first()
    )


def get_user_by_id(
    db,
    user_id
):
    return (
        db.query(User)
        .filter(
            User.id == user_id,
            User.is_deleted == False
        )
        .first()
    )


def get_all_users(db):
    return db.query(User).filter(
        User.is_deleted == False
    ).all()


def get_super_user(db):
    return (
        db.query(User)
        .filter(
            User.roles.contains(["SUPER_USER"]),
            User.is_deleted == False
        )
        .first()
    )


def update_user(
    db,
    user,
    name=None,
    email=None,
    password=None,
    roles=None
):
    if roles is not None and "SUPER_USER" in roles:
        existing_super = get_super_user(db)
        if existing_super and str(existing_super.id) != str(user.id):
            return None

    if name is not None:
        user.name = name

    if email is not None:
        user.email = email

    if password is not None:
        user.password = hash_password(password)

    if roles is not None:
        user.roles = roles

    db.commit()
    db.refresh(user)

    return user


def delete_user(
    db,
    user
):
    user.is_deleted = True
    db.commit()


def login_user(
    db,
    email,
    password
):
    user = get_user_by_email(
        db,
        email
    )

    if not user:
        return None

    if not verify_password(
        password,
        user.password
    ):
        return None

    return user


def set_user_role(db, user_id, role, requester_roles):
    user = get_user_by_id(db, user_id)

    if not user:
        return None

    if "SUPER_USER" in user.roles:
        return False

    if role not in ["USER", "ADMIN"]:
        return False

    if role == "USER" and "SUPER_USER" not in requester_roles:
        return False

    if role == "ADMIN":
        user.roles = ["USER", "ADMIN"]
    else:
        user.roles = ["USER"]

    db.commit()
    db.refresh(user)

    return user
