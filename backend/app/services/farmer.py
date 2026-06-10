from app.helpers.farmer import FarmerHelper

from app.repositories import farmer as farmer_repository
from app.repositories import farm as farm_repository


def create_farmer(db, farmer_data):

    farmer_helper = FarmerHelper.from_dict(farmer_data)

    return farmer_repository.create_farmer(db, farmer_helper)


def get_farmer_by_id(db, farmer_id):

    return farmer_repository.get_farmer_by_id(db, farmer_id)


def get_farmer_by_phone(db, phone_number):

    return farmer_repository.get_farmer_by_phone(db, phone_number)


def get_all_farmers(db):

    return farmer_repository.get_all_farmers(db)


def get_all_farms(db):

    return farm_repository.get_all_farms(db)


def get_farmers_by_crop_name(db, crop_name):

    return farmer_repository.get_farmers_by_crop_name(
        db,
        crop_name
    )


def update_farmer(db, farmer_id, update_data):

    return farmer_repository.update_farmer(db, farmer_id, update_data)


def delete_farmer(db, farmer_id):

    return farmer_repository.delete_farmer(db, farmer_id)


def convert_quantity(quantity, quantity_unit):

    if quantity_unit == "g":
        return quantity / 1000

    if quantity_unit == "mL":
        return quantity / 1000

    return quantity


def get_bill_of_materials(db, farmer_id, bill_data):

    farm_id = bill_data.get("farm_id")

    fertilizer_prices = bill_data.get(
        "fertilizer_prices",
        {}
    )

    schedules = farmer_repository.get_bill_of_materials(
        db,
        farmer_id,
        farm_id
    )

    bill_items = {}

    total_bill = 0

    for schedule in schedules:

        unit_price = fertilizer_prices.get(
            schedule.fertilizer,
            0
        )

        converted_quantity = convert_quantity(
            schedule.quantity,
            schedule.quantity_unit
        )

        total_cost = converted_quantity * unit_price

        total_bill += total_cost

        converted_unit = schedule.quantity_unit

        if schedule.quantity_unit == "g":
            converted_unit = "kg"

        elif schedule.quantity_unit == "mL":
            converted_unit = "L"

        if schedule.fertilizer not in bill_items:

            bill_items[schedule.fertilizer] = {
                "fertilizer": schedule.fertilizer,
                "quantity": converted_quantity,
                "quantity_unit": converted_unit,
                "unit_price": unit_price,
                "total_cost": total_cost
            }

        else:

            bill_items[schedule.fertilizer]["quantity"] += (
                converted_quantity
            )

            bill_items[schedule.fertilizer]["total_cost"] += (
                total_cost
            )

    bill_items = list(bill_items.values())

    return {
        "farmer_id": farmer_id,
        "farm_id": farm_id,
        "bill_items": bill_items,
        "total_bill": total_bill
    }


def get_overall_bill(db, farmer_id, bill_data):

    fertilizer_prices = bill_data.get(
        "fertilizer_prices",
        {}
    )

    schedules = farmer_repository.get_overall_bill(
        db,
        farmer_id
    )

    bill_items = {}

    total_bill = 0

    for schedule in schedules:

        unit_price = fertilizer_prices.get(
            schedule.fertilizer,
            0
        )

        converted_quantity = convert_quantity(
            schedule.quantity,
            schedule.quantity_unit
        )

        total_cost = converted_quantity * unit_price

        total_bill += total_cost

        converted_unit = schedule.quantity_unit

        if schedule.quantity_unit == "g":
            converted_unit = "kg"

        elif schedule.quantity_unit == "mL":
            converted_unit = "L"

        if schedule.fertilizer not in bill_items:

            bill_items[schedule.fertilizer] = {
                "fertilizer": schedule.fertilizer,
                "quantity": converted_quantity,
                "quantity_unit": converted_unit,
                "unit_price": unit_price,
                "total_cost": total_cost
            }

        else:

            bill_items[schedule.fertilizer]["quantity"] += (
                converted_quantity
            )

            bill_items[schedule.fertilizer]["total_cost"] += (
                total_cost
            )

    bill_items = list(bill_items.values())

    return {
        "farmer_id": farmer_id,
        "bill_items": bill_items,
        "total_bill": total_bill
    }
