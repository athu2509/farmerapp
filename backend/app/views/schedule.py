from uuid import UUID

from fastapi import (
    APIRouter,
    Depends,
    Request
)
from sqlalchemy.orm import Session

from app.config.database import get_db
from app.services import schedule as schedule_service
from app.util.response import success_response, error_response
from app.middleware.auth import require_roles

schedule_view = APIRouter()

ALLOWED_UNITS = ["kg", "g", "L", "mL"]
ALLOWED_STATUSES = ["pending", "completed"]


@schedule_view.post("/schedules")
@require_roles(["ADMIN", "SUPER_USER"])
async def create_schedule(
    request: Request,
    db: Session = Depends(get_db)
):

    body = await request.json()

    required_fields = [
        "farm_id",
        "task_name",
        "days_after_sowing",
        "quantity",
        "quantity_unit",
        "fertilizer"
    ]

    for field in required_fields:
        if field not in body:
            return error_response(f"{field} is required", status_code=400)

    try:
        UUID(body["farm_id"])
    except ValueError:
        return error_response("Invalid farm_id", status_code=400)

    if not body["task_name"].strip():
        return error_response("Task name cannot be empty", status_code=400)

    if not isinstance(body["days_after_sowing"], int):
        return error_response(
            "days_after_sowing must be an integer",
            status_code=400
        )

    if body["days_after_sowing"] < 0:
        return error_response(
            "Days after sowing cannot be negative",
            status_code=400
        )

    if not isinstance(body["quantity"], (int, float)):
        return error_response("Quantity must be a number", status_code=400)

    if body["quantity"] <= 0:
        return error_response(
            "Quantity must be greater than 0",
            status_code=400
        )

    if body["quantity_unit"] not in ALLOWED_UNITS:
        return error_response(
            f"Invalid quantity unit. Allowed: {', '.join(ALLOWED_UNITS)}",
            status_code=400
        )

    if not body["fertilizer"].strip():
        return error_response("Fertilizer cannot be empty", status_code=400)

    created_schedule = schedule_service.create_schedule(db, body)

    if not created_schedule:
        return error_response("Farm not found", status_code=404)

    return success_response(
        data=created_schedule.to_dict(),
        message="Schedule created successfully",
        status_code=201
    )


@schedule_view.get("/schedules/due-today")
@require_roles()
async def get_schedules_due_today(
    request: Request,
    db: Session = Depends(get_db)
):

    schedules = schedule_service.get_schedules_due_today(db)

    return success_response(
        data=[schedule.to_dict() for schedule in schedules],
        message="Schedules due today retrieved successfully"
    )


@schedule_view.get("/schedules/due-tomorrow")
@require_roles()
async def get_schedules_due_tomorrow(
    request: Request,
    db: Session = Depends(get_db)
):

    schedules = schedule_service.get_schedules_due_tomorrow(db)

    return success_response(
        data=[schedule.to_dict() for schedule in schedules],
        message="Schedules due tomorrow retrieved successfully"
    )


@schedule_view.get("/schedules/{schedule_id}")
@require_roles()
async def get_schedule_by_id(
    request: Request,
    schedule_id: str,
    db: Session = Depends(get_db)
):

    try:
        UUID(schedule_id)
    except ValueError:
        return error_response("Invalid schedule id", status_code=400)

    schedule = schedule_service.get_schedule_by_id(db, schedule_id)

    if not schedule:
        return error_response("Schedule not found", status_code=404)

    return success_response(
        data=schedule.to_dict(),
        message="Schedule retrieved successfully"
    )


@schedule_view.get("/farms/{farm_id}/schedules")
@require_roles()
async def get_schedules_by_farm_id(
    request: Request,
    farm_id: str,
    db: Session = Depends(get_db)
):

    try:
        UUID(farm_id)
    except ValueError:
        return error_response("Invalid farm id", status_code=400)

    schedules = schedule_service.get_schedules_by_farm_id(db, farm_id)

    if schedules is None:
        return error_response("Farm not found", status_code=404)

    return success_response(
        data=[schedule.to_dict() for schedule in schedules],
        message="Schedules retrieved successfully"
    )


@schedule_view.get("/schedules")
@require_roles()
async def get_all_schedules(
    request: Request,
    db: Session = Depends(get_db)
):

    schedules = schedule_service.get_all_schedules(db)

    return success_response(
        data=[schedule.to_dict() for schedule in schedules],
        message="Schedules retrieved successfully"
    )


@schedule_view.put("/schedules/{schedule_id}")
@require_roles(["ADMIN", "SUPER_USER"])
async def update_schedule(
    schedule_id: str,
    request: Request,
    db: Session = Depends(get_db)
):

    try:
        UUID(schedule_id)
    except ValueError:
        return error_response("Invalid schedule id", status_code=400)

    body = await request.json()

    updatable_fields = [
        "task_name",
        "fertilizer",
        "quantity",
        "quantity_unit",
        "days_after_sowing"
    ]

    if not any(field in body for field in updatable_fields):
        return error_response(
            "At least one field must be provided to update",
            status_code=400
        )

    if "task_name" in body and not body["task_name"].strip():
        return error_response("Task name cannot be empty", status_code=400)

    if "fertilizer" in body and not body["fertilizer"].strip():
        return error_response("Fertilizer cannot be empty", status_code=400)

    if "quantity" in body:
        if not isinstance(body["quantity"], (int, float)):
            return error_response("Quantity must be a number", status_code=400)
        if body["quantity"] <= 0:
            return error_response(
                "Quantity must be greater than 0",
                status_code=400
            )

    if "quantity_unit" in body and body["quantity_unit"] not in ALLOWED_UNITS:
        return error_response(
            f"Invalid quantity unit. Allowed: {', '.join(ALLOWED_UNITS)}",
            status_code=400
        )

    if "days_after_sowing" in body:
        if not isinstance(body["days_after_sowing"], int):
            return error_response(
                "days_after_sowing must be an integer",
                status_code=400
            )
        if body["days_after_sowing"] < 0:
            return error_response(
                "Days after sowing cannot be negative",
                status_code=400
            )

    result = schedule_service.update_schedule(db, schedule_id, body)

    if result is None:
        return error_response("Schedule not found", status_code=404)

    return success_response(
        data=result.to_dict(),
        message="Schedule updated successfully"
    )


@schedule_view.patch("/schedules/{schedule_id}/status")
@require_roles(["ADMIN", "SUPER_USER"])
async def update_schedule_status(
    schedule_id: str,
    request: Request,
    db: Session = Depends(get_db)
):

    try:
        UUID(schedule_id)
    except ValueError:
        return error_response("Invalid schedule id", status_code=400)

    body = await request.json()

    if "status" not in body:
        return error_response("status is required", status_code=400)

    if body["status"] not in ALLOWED_STATUSES:
        return error_response(
            f"Invalid status. Allowed: {', '.join(ALLOWED_STATUSES)}",
            status_code=400
        )

    result = schedule_service.update_schedule_status(
        db,
        schedule_id,
        body["status"]
    )

    if result is None:
        return error_response("Schedule not found", status_code=404)

    return success_response(
        data=result.to_dict(),
        message="Schedule status updated successfully"
    )


@schedule_view.delete("/schedules/{schedule_id}")
@require_roles(["ADMIN", "SUPER_USER"])
async def delete_schedule(
    schedule_id: str,
    request: Request,
    db: Session = Depends(get_db)
):

    try:
        UUID(schedule_id)
    except ValueError:
        return error_response("Invalid schedule id", status_code=400)

    result = schedule_service.delete_schedule(db, schedule_id)

    if result is None:
        return error_response("Schedule not found", status_code=404)

    return success_response(
        data=None,
        message="Schedule deleted successfully"
    )
