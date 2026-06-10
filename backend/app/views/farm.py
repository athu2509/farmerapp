from datetime import date
from uuid import UUID

from fastapi import (
    APIRouter,
    Depends,
    Request
)
from sqlalchemy.orm import Session

from app.middleware.auth import require_roles
from app.config.database import get_db
from app.services import farm as farm_service
from app.util.response import success_response, error_response

farm_view = APIRouter()


@farm_view.post("/farms")
@require_roles(["ADMIN", "SUPER_USER"])
async def create_farm(
    request: Request,
    db: Session = Depends(get_db)
):

    body = await request.json()

    required_fields = [
        "farmer_id",
        "area",
        "village",
        "crop_name",
        "sowing_date"
    ]

    for field in required_fields:
        if field not in body:
            return error_response(f"{field} is required", status_code=400)

    try:
        UUID(body["farmer_id"])
    except ValueError:
        return error_response("Invalid farmer_id", status_code=400)

    if not body["area"] or (isinstance(body["area"], str) and not body["area"].strip()):
        return error_response("Area cannot be empty", status_code=400)

    if not body["village"].strip():
        return error_response("Village cannot be empty", status_code=400)

    if not body["crop_name"].strip():
        return error_response("Crop name cannot be empty", status_code=400)

    try:
        date.fromisoformat(body["sowing_date"])
    except (ValueError, TypeError):
        return error_response(
            "sowing_date must be a valid date in YYYY-MM-DD format",
            status_code=400
        )

    created_farm = farm_service.create_farm(db, body)

    if not created_farm:
        return error_response("Farmer not found", status_code=404)

    return success_response(
        data=created_farm.to_dict(),
        message="Farm created successfully",
        status_code=201
    )


@farm_view.get("/farms/{farm_id}")
@require_roles()
async def get_farm_by_id(
    request: Request,
    farm_id: str,
    db: Session = Depends(get_db)
):

    try:
        UUID(farm_id)
    except ValueError:
        return error_response("Invalid farm id", status_code=400)

    farm = farm_service.get_farm_by_id(db, farm_id)

    if not farm:
        return error_response("Farm not found", status_code=404)

    return success_response(
        data=farm.to_dict(),
        message="Farm retrieved successfully"
    )


@farm_view.get("/farmers/{farmer_id}/farms")
@require_roles()
async def get_farms_by_farmer_id(
    request: Request,
    farmer_id: str,
    db: Session = Depends(get_db)
):

    try:
        UUID(farmer_id)
    except ValueError:
        return error_response("Invalid farmer id", status_code=400)

    farms = farm_service.get_farms_by_farmer_id(db, farmer_id)

    if farms is None:
        return error_response("Farmer not found", status_code=404)

    return success_response(
        data=[farm.to_dict() for farm in farms],
        message="Farms retrieved successfully"
    )


@farm_view.get("/farms")
@require_roles()
async def get_all_farms(
    request: Request,
    db: Session = Depends(get_db)
):

    farms = farm_service.get_all_farms(db)

    return success_response(
        data=[farm.to_dict() for farm in farms],
        message="Farms retrieved successfully"
    )


@farm_view.put("/farms/{farm_id}")
@require_roles(["ADMIN", "SUPER_USER"])
async def update_farm(
    farm_id: str,
    request: Request,
    db: Session = Depends(get_db)
):

    try:
        UUID(farm_id)
    except ValueError:
        return error_response("Invalid farm id", status_code=400)

    body = await request.json()

    updatable_fields = ["area", "village", "crop_name", "sowing_date"]

    if not any(field in body for field in updatable_fields):
        return error_response(
            "At least one field must be provided to update",
            status_code=400
        )

    if "area" in body:
        if not body["area"] or (isinstance(body["area"], str) and not body["area"].strip()):
            return error_response("Area cannot be empty", status_code=400)

    if "village" in body and not body["village"].strip():
        return error_response("Village cannot be empty", status_code=400)

    if "crop_name" in body and not body["crop_name"].strip():
        return error_response("Crop name cannot be empty", status_code=400)

    if "sowing_date" in body:
        try:
            date.fromisoformat(body["sowing_date"])
        except (ValueError, TypeError):
            return error_response(
                "sowing_date must be a valid date in YYYY-MM-DD format",
                status_code=400
            )

    result = farm_service.update_farm(db, farm_id, body)

    if result is None:
        return error_response("Farm not found", status_code=404)

    return success_response(
        data=result.to_dict(),
        message="Farm updated successfully"
    )


@farm_view.delete("/farms/{farm_id}")
@require_roles(["ADMIN", "SUPER_USER"])
async def delete_farm(
    farm_id: str,
    request: Request,
    db: Session = Depends(get_db)
):

    try:
        UUID(farm_id)
    except ValueError:
        return error_response("Invalid farm id", status_code=400)

    result = farm_service.delete_farm(db, farm_id)

    if result is None:
        return error_response("Farm not found", status_code=404)

    return success_response(
        data=None,
        message="Farm deleted successfully"
    )
