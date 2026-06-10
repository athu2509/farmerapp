from sqlalchemy.exc import IntegrityError

from app.models.farmer import Farmer
from app.models.farm import Farm
from app.models.schedule import Schedule

from app.mappers.farmer import (
    helper_to_model,
    model_to_helper
)


def create_farmer(db, farmer_helper):

    farmer_model = helper_to_model(farmer_helper)

    try:

        db.add(farmer_model)
        db.commit()
        db.refresh(farmer_model)

        return model_to_helper(farmer_model)

    except IntegrityError:

        db.rollback()

        return None


def get_farmer_by_id(db, farmer_id):

    farmer_model = db.query(Farmer).filter(
        Farmer.id == farmer_id,
        Farmer.is_deleted == False
    ).first()

    if not farmer_model:
        return None

    return model_to_helper(farmer_model)


def get_farmer_by_phone(db, phone_number):

    farmer_model = db.query(Farmer).filter(
        Farmer.phone_number == phone_number,
        Farmer.is_deleted == False
    ).first()

    if not farmer_model:
        return None

    return model_to_helper(farmer_model)


def get_all_farmers(db):

    farmer_models = db.query(Farmer).filter(
        Farmer.is_deleted == False
    ).all()

    farmer_helpers = []

    for farmer_model in farmer_models:

        farmer_helper = model_to_helper(farmer_model)

        farmer_helpers.append(farmer_helper)

    return farmer_helpers


def update_farmer(db, farmer_id, update_data):

    farmer_model = db.query(Farmer).filter(
        Farmer.id == farmer_id,
        Farmer.is_deleted == False
    ).first()

    if not farmer_model:
        return None

    if "name" in update_data and update_data["name"] is not None:
        farmer_model.name = update_data["name"]

    if "phone_number" in update_data and update_data["phone_number"] is not None:
        farmer_model.phone_number = update_data["phone_number"]

    if "language" in update_data and update_data["language"] is not None:
        farmer_model.language = update_data["language"]

    if "country" in update_data and update_data["country"] is not None:
        farmer_model.country = update_data["country"]

    try:

        db.commit()
        db.refresh(farmer_model)

        return model_to_helper(farmer_model)

    except IntegrityError:

        db.rollback()

        return False


def delete_farmer(db, farmer_id):

    farmer_model = db.query(Farmer).filter(
        Farmer.id == farmer_id,
        Farmer.is_deleted == False
    ).first()

    if not farmer_model:
        return None

    farmer_model.is_deleted = True

    farms = db.query(Farm).filter(
        Farm.farmer_id == farmer_id,
        Farm.is_deleted == False
    ).all()

    for farm in farms:
        farm.is_deleted = True

        schedules = db.query(Schedule).filter(
            Schedule.farm_id == farm.id,
            Schedule.is_deleted == False
        ).all()

        for schedule in schedules:
            schedule.is_deleted = True

    db.commit()

    return True


def get_farmers_by_crop_name(db, crop_name):

    farmer_models = db.query(
        Farmer
    ).join(
        Farm,
        Farmer.id == Farm.farmer_id
    ).filter(
        Farm.crop_name.ilike(f"%{crop_name}%"),
        Farmer.is_deleted == False,
        Farm.is_deleted == False
    ).distinct().all()

    farmer_helpers = []

    for farmer_model in farmer_models:
        farmer_helpers.append(model_to_helper(farmer_model))

    return farmer_helpers


def get_bill_of_materials(db, farmer_id, farm_id):

    schedules = db.query(
        Schedule
    ).join(
        Farm,
        Schedule.farm_id == Farm.id
    ).filter(
        Farm.farmer_id == farmer_id,
        Farm.id == farm_id,
        Schedule.is_deleted == False,
        Farm.is_deleted == False
    ).all()

    return schedules


def get_overall_bill(db, farmer_id):

    schedules = db.query(
        Schedule
    ).join(
        Farm,
        Schedule.farm_id == Farm.id
    ).filter(
        Farm.farmer_id == farmer_id,
        Schedule.is_deleted == False,
        Farm.is_deleted == False
    ).all()

    return schedules
