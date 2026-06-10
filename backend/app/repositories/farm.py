from sqlalchemy.exc import IntegrityError

from app.models.farm import Farm
from app.models.farmer import Farmer
from app.models.schedule import Schedule

from app.mappers.farm import (
    helper_to_model,
    model_to_helper
)


def create_farm(db, farm_helper):

    farmer = db.query(Farmer).filter(
        Farmer.id == farm_helper.farmer_id,
        Farmer.is_deleted == False
    ).first()

    if not farmer:
        return None

    farm_model = helper_to_model(farm_helper)

    db.add(farm_model)

    db.commit()

    db.refresh(farm_model)

    return model_to_helper(farm_model)


def get_farm_by_id(db, farm_id):

    farm_model = db.query(Farm).filter(
        Farm.id == farm_id,
        Farm.is_deleted == False
    ).first()

    if not farm_model:
        return None

    return model_to_helper(farm_model)


def get_farms_by_farmer_id(db, farmer_id):

    farmer = db.query(Farmer).filter(
        Farmer.id == farmer_id,
        Farmer.is_deleted == False
    ).first()

    if not farmer:
        return None

    farms = db.query(Farm).filter(
        Farm.farmer_id == farmer_id,
        Farm.is_deleted == False
    ).all()

    farm_helpers = []

    for farm in farms:
        farm_helpers.append(model_to_helper(farm))

    return farm_helpers


def get_all_farms(db):

    farm_models = db.query(Farm).filter(
        Farm.is_deleted == False
    ).all()

    farm_helpers = []

    for farm_model in farm_models:
        farm_helpers.append(model_to_helper(farm_model))

    return farm_helpers


def update_farm(db, farm_id, update_data):

    farm_model = db.query(Farm).filter(
        Farm.id == farm_id,
        Farm.is_deleted == False
    ).first()

    if not farm_model:
        return None

    if "area" in update_data and update_data["area"] is not None:
        farm_model.area = update_data["area"]

    if "village" in update_data and update_data["village"] is not None:
        farm_model.village = update_data["village"]

    if "crop_name" in update_data and update_data["crop_name"] is not None:
        farm_model.crop_name = update_data["crop_name"]

    if "sowing_date" in update_data and update_data["sowing_date"] is not None:
        farm_model.sowing_date = update_data["sowing_date"]

    db.commit()
    db.refresh(farm_model)

    return model_to_helper(farm_model)


def delete_farm(db, farm_id):

    farm_model = db.query(Farm).filter(
        Farm.id == farm_id,
        Farm.is_deleted == False
    ).first()

    if not farm_model:
        return None

    farm_model.is_deleted = True

    schedules = db.query(Schedule).filter(
        Schedule.farm_id == farm_id,
        Schedule.is_deleted == False
    ).all()

    for schedule in schedules:
        schedule.is_deleted = True

    db.commit()

    return True
