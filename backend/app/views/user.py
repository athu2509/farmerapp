from uuid import UUID

from fastapi import (
    APIRouter,
    Depends,
    Request
)
from sqlalchemy.orm import Session

from app.middleware.auth import require_roles
from app.helpers.user import user_to_dict
from app.config.database import get_db
from app.services import user as user_service
from app.util.jwt import create_access_token, decode_access_token
from app.util.response import success_response, error_response

user_view = APIRouter()


@user_view.post("/user/create")
async def create_user(
    request: Request,
    db: Session = Depends(get_db)
):

    body = await request.json()

    required_fields = ["name", "email", "password"]

    for field in required_fields:
        if field not in body:
            return error_response(f"{field} is required", status_code=400)

    if not body["name"].strip():
        return error_response("Name cannot be empty", status_code=400)

    if not body["email"].strip():
        return error_response("Email cannot be empty", status_code=400)

    if "@" not in body["email"] or "." not in body["email"]:
        return error_response("Invalid email address", status_code=400)

    if len(body["password"]) < 6:
        return error_response(
            "Password must be at least 6 characters",
            status_code=400
        )

    existing = user_service.get_user_by_email(db, body["email"])

    if existing:
        return error_response("Email already in use", status_code=409)

    roles = body.get("roles", ["USER"])

    if "SUPER_USER" in roles:
        existing_super = user_service.get_super_user(db)
        if existing_super:
            return error_response(
                "Only one superuser is allowed",
                status_code=409
            )

    user = user_service.create_user(
        db=db,
        name=body["name"],
        email=body["email"],
        password=body["password"],
        roles=roles
    )

    if not user:
        return error_response(
            "Only one superuser is allowed",
            status_code=409
        )

    return success_response(
        data=user_to_dict(user),
        message="User created successfully",
        status_code=201
    )


@user_view.post("/login")
async def login(
    request: Request,
    db: Session = Depends(get_db)
):

    body = await request.json()

    if "email" not in body:
        return error_response("email is required", status_code=400)

    if "password" not in body:
        return error_response("password is required", status_code=400)

    user = user_service.login_user(
        db,
        body["email"],
        body["password"]
    )

    if not user:
        return error_response("Invalid credentials", status_code=401)

    token = create_access_token(
        {
            "user_id": str(user.id),
            "roles": user.roles
        }
    )

    return success_response(
        data={
            "token": token,
            "user": user_to_dict(user)
        },
        message="Login successful"
    )


@user_view.get("/users")
@require_roles(["ADMIN", "SUPER_USER"])
async def get_all_users(
    request: Request,
    db: Session = Depends(get_db)
):

    users = user_service.get_all_users(db)

    return success_response(
        data=[user_to_dict(u) for u in users],
        message="Users retrieved successfully"
    )


@user_view.get("/user/{user_id}")
@require_roles(["ADMIN", "SUPER_USER"])
async def get_user(
    request: Request,
    user_id: str,
    db: Session = Depends(get_db)
):

    try:
        UUID(user_id)
    except ValueError:
        return error_response("Invalid user id", status_code=400)

    user = user_service.get_user_by_id(db, user_id)

    if not user:
        return error_response("User not found", status_code=404)

    return success_response(
        data=user_to_dict(user),
        message="User retrieved successfully"
    )


@user_view.put("/update/{user_id}")
@require_roles(["ADMIN", "SUPER_USER"])
async def update_user(
    user_id: str,
    request: Request,
    db: Session = Depends(get_db)
):

    try:
        UUID(user_id)
    except ValueError:
        return error_response("Invalid user id", status_code=400)

    body = await request.json()

    updatable_fields = ["name", "email", "password", "roles"]

    if not any(field in body for field in updatable_fields):
        return error_response(
            "At least one field must be provided to update",
            status_code=400
        )

    if "name" in body and not body["name"].strip():
        return error_response("Name cannot be empty", status_code=400)

    if "email" in body:
        if not body["email"].strip():
            return error_response("Email cannot be empty", status_code=400)
        if "@" not in body["email"] or "." not in body["email"]:
            return error_response("Invalid email address", status_code=400)
        existing = user_service.get_user_by_email(db, body["email"])
        if existing and str(existing.id) != user_id:
            return error_response("Email already in use", status_code=409)

    if "password" in body and len(body["password"]) < 6:
        return error_response(
            "Password must be at least 6 characters",
            status_code=400
        )

    if "roles" in body and not isinstance(body["roles"], list):
        return error_response("roles must be a list", status_code=400)

    if "roles" in body and "SUPER_USER" in body["roles"]:
        existing_super = user_service.get_super_user(db)
        if existing_super and str(existing_super.id) != user_id:
            return error_response(
                "Only one superuser is allowed",
                status_code=409
            )

    user = user_service.get_user_by_id(db, user_id)

    if not user:
        return error_response("User not found", status_code=404)

    updated_user = user_service.update_user(
        db=db,
        user=user,
        name=body.get("name"),
        email=body.get("email"),
        password=body.get("password"),
        roles=body.get("roles")
    )

    if not updated_user:
        return error_response(
            "Only one superuser is allowed",
            status_code=409
        )

    return success_response(
        data=user_to_dict(updated_user),
        message="User updated successfully"
    )


@user_view.delete("/delete/{user_id}")
@require_roles(["ADMIN", "SUPER_USER"])
async def delete_user(
    request: Request,
    user_id: str,
    db: Session = Depends(get_db)
):

    try:
        UUID(user_id)
    except ValueError:
        return error_response("Invalid user id", status_code=400)

    user = user_service.get_user_by_id(db, user_id)

    if not user:
        return error_response("User not found", status_code=404)

    if "SUPER_USER" in user.roles:
        return error_response("Superuser cannot be deleted", status_code=403)

    user_service.delete_user(db, user)

    return success_response(
        data=None,
        message="User deleted successfully"
    )


@user_view.patch("/set-role/{user_id}")
@require_roles(["ADMIN", "SUPER_USER"])
async def set_user_role(
    request: Request,
    user_id: str,
    db: Session = Depends(get_db)
):

    try:
        UUID(user_id)
    except ValueError:
        return error_response("Invalid user id", status_code=400)

    body = await request.json()

    if "role" not in body:
        return error_response("role is required", status_code=400)

    if body["role"] not in ["USER", "ADMIN"]:
        return error_response(
            "Invalid role. Allowed: USER, ADMIN",
            status_code=400
        )

    authorization = request.headers.get("Authorization", "")
    token = authorization.replace("Bearer ", "")
    payload = decode_access_token(token)
    requester_roles = payload.get("roles", [])

    user = user_service.set_user_role(
        db,
        user_id,
        body["role"],
        requester_roles
    )

    if user is None:
        return error_response("User not found", status_code=404)

    if user is False:
        return error_response(
            "Cannot change role for this user",
            status_code=403
        )

    return success_response(
        data=user_to_dict(user),
        message="User role updated successfully"
    )
