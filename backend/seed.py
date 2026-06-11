from app.config.database import SessionLocal
from app.services.user import (
    create_user,
    get_user_by_email,
    get_super_user
)

def seed_users():
    db = SessionLocal()

    try:

        # Super user
        if not get_super_user(db):
            create_user(
                db=db,
                name="Super User",
                email="superuser@farmerapp.com",
                password="super123",
                roles=["SUPER_USER", "ADMIN", "USER"]
            )
            print("Super user created")
        else:
            print("⏭ Super user already exists")

        # Admin
        if not get_user_by_email(db, "admin@farmerapp.com"):
            create_user(
                db=db,
                name="Admin",
                email="admin@farmerapp.com",
                password="admin123",
                roles=["ADMIN", "USER"]
            )
            print("Admin created")
        else:
            print("⏭ Admin already exists")
        if not get_user_by_email(db, "user@farmerapp.com"):
            create_user(
                db=db,
                name="Regular User",
                email="user@farmerapp.com",
                password="user123",
                roles=["USER"]
            )
            print("User created")

    finally:
        db.close()


if __name__ == "__main__":
    seed_users()