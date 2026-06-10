from uuid import UUID

from fastapi import (
    APIRouter,
    Depends,
    Request
)
from sqlalchemy.orm import Session

from app.config.database import get_db
from app.services import farmer as farmer_service
from app.util.response import success_response, error_response
from app.middleware.auth import require_roles

farmer_view = APIRouter()


@farmer_view.post("/farmers")
@require_roles(["ADMIN", "SUPER_USER"])
async def create_farmer(
    request: Request,
    db: Session = Depends(get_db)
):

    body = await request.json()

    required_fields = ["name", "phone_number", "language", "country"]

    for field in required_fields:
        if field not in body:
            return error_response(f"{field} is required", status_code=400)

    if not body["name"].strip():
        return error_response("Name cannot be empty", status_code=400)

    if not body["phone_number"].strip():
        return error_response("Phone number cannot be empty", status_code=400)

    if not body["phone_number"].strip().isdigit() or len(body["phone_number"].strip()) != 10:
        return error_response("Phone number must be exactly 10 digits", status_code=400)

    if not body["language"].strip():
        return error_response("Language cannot be empty", status_code=400)

    if not body["country"].strip():
        return error_response("Country cannot be empty", status_code=400)

    created_farmer = farmer_service.create_farmer(db, body)

    if not created_farmer:
        return error_response("Phone number already exists", status_code=409)

    return success_response(
        data=created_farmer.to_dict(),
        message="Farmer created successfully",
        status_code=201
    )


@farmer_view.get("/farmers/crop/{crop_name}")
@require_roles()
async def get_farmers_by_crop_name(
    request: Request,
    crop_name: str,
    db: Session = Depends(get_db)
):

    if not crop_name.strip():
        return error_response("crop_name cannot be empty", status_code=400)

    farmers = farmer_service.get_farmers_by_crop_name(db, crop_name)

    if not farmers:
        return error_response(
            "No farmers found for this crop",
            status_code=404
        )

    return success_response(
        data=[farmer.to_dict() for farmer in farmers],
        message="Farmers retrieved successfully"
    )


@farmer_view.get("/farmers/{farmer_id}")
@require_roles()
async def get_farmer_by_id(
    request: Request,
    farmer_id: str,
    db: Session = Depends(get_db)
):

    try:
        UUID(farmer_id)
    except ValueError:
        return error_response("Invalid farmer id", status_code=400)

    farmer = farmer_service.get_farmer_by_id(db, farmer_id)

    if not farmer:
        return error_response("Farmer not found", status_code=404)

    return success_response(
        data=farmer.to_dict(),
        message="Farmer retrieved successfully"
    )


@farmer_view.get("/farmers")
@require_roles()
async def get_all_farmers(
    request: Request,
    db: Session = Depends(get_db)
):

    farmers = farmer_service.get_all_farmers(db)

    return success_response(
        data=[farmer.to_dict() for farmer in farmers],
        message="Farmers retrieved successfully"
    )


@farmer_view.put("/farmers/{farmer_id}")
@require_roles(["ADMIN", "SUPER_USER"])
async def update_farmer(
    farmer_id: str,
    request: Request,
    db: Session = Depends(get_db)
):

    try:
        UUID(farmer_id)
    except ValueError:
        return error_response("Invalid farmer id", status_code=400)

    body = await request.json()

    updatable_fields = ["name", "phone_number", "language", "country"]

    if not any(field in body for field in updatable_fields):
        return error_response(
            "At least one field must be provided to update",
            status_code=400
        )

    if "name" in body and not body["name"].strip():
        return error_response("Name cannot be empty", status_code=400)

    if "phone_number" in body:
        phone = body["phone_number"].strip()
        if not phone.isdigit() or len(phone) != 10:
            return error_response(
                "Phone number must be exactly 10 digits",
                status_code=400
            )

    if "language" in body and not body["language"].strip():
        return error_response("Language cannot be empty", status_code=400)

    if "country" in body and not body["country"].strip():
        return error_response("Country cannot be empty", status_code=400)

    result = farmer_service.update_farmer(db, farmer_id, body)

    if result is None:
        return error_response("Farmer not found", status_code=404)

    if result is False:
        return error_response("Phone number already exists", status_code=409)

    return success_response(
        data=result.to_dict(),
        message="Farmer updated successfully"
    )


@farmer_view.delete("/farmers/{farmer_id}")
@require_roles(["ADMIN", "SUPER_USER"])
async def delete_farmer(
    farmer_id: str,
    request: Request,
    db: Session = Depends(get_db)
):

    try:
        UUID(farmer_id)
    except ValueError:
        return error_response("Invalid farmer id", status_code=400)

    result = farmer_service.delete_farmer(db, farmer_id)

    if result is None:
        return error_response("Farmer not found", status_code=404)

    return success_response(
        data=None,
        message="Farmer deleted successfully"
    )


@farmer_view.post("/farmers/{farmer_id}/bill")
@require_roles(["ADMIN", "SUPER_USER"])
async def get_bill_of_materials(
    farmer_id: str,
    request: Request,
    db: Session = Depends(get_db)
):

    try:
        UUID(farmer_id)
    except ValueError:
        return error_response("Invalid farmer id", status_code=400)

    farmer = farmer_service.get_farmer_by_id(db, farmer_id)

    if not farmer:
        return error_response("Farmer not found", status_code=404)

    bill_data = await request.json()

    if not bill_data:
        return error_response("Request body is required", status_code=400)

    if "farm_id" not in bill_data:
        return error_response("farm_id is required", status_code=400)

    try:
        UUID(bill_data["farm_id"])
    except ValueError:
        return error_response("Invalid farm_id", status_code=400)

    if "fertilizer_prices" not in bill_data:
        return error_response("fertilizer_prices is required", status_code=400)

    if not isinstance(bill_data["fertilizer_prices"], dict):
        return error_response(
            "fertilizer_prices must be an object",
            status_code=400
        )

    bill = farmer_service.get_bill_of_materials(db, farmer_id, bill_data)

    return success_response(
        data=bill,
        message="Bill of materials retrieved successfully"
    )


@farmer_view.post("/farmers/{farmer_id}/overall-bill")
@require_roles(["ADMIN", "SUPER_USER"])
async def get_overall_bill(
    farmer_id: str,
    request: Request,
    db: Session = Depends(get_db)
):

    try:
        UUID(farmer_id)
    except ValueError:
        return error_response("Invalid farmer id", status_code=400)

    farmer = farmer_service.get_farmer_by_id(db, farmer_id)

    if not farmer:
        return error_response("Farmer not found", status_code=404)

    bill_data = await request.json()

    if not bill_data:
        return error_response("Request body is required", status_code=400)

    if "fertilizer_prices" not in bill_data:
        return error_response("fertilizer_prices is required", status_code=400)

    if not isinstance(bill_data["fertilizer_prices"], dict):
        return error_response(
            "fertilizer_prices must be an object",
            status_code=400
        )

    bill = farmer_service.get_overall_bill(db, farmer_id, bill_data)

    return success_response(
        data=bill,
        message="Overall bill retrieved successfully"
    )
