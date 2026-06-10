from datetime import date

from app.helpers.farm import FarmHelper

from app.repositories import farm as farm_repository
from app.repositories import farmer as farmer_repository


def create_farm(db, farm_data):

    farm_helper = FarmHelper.from_dict(farm_data)

    farmer = farmer_repository.get_farmer_by_id(
        db,
        farm_helper.farmer_id
    )

    if not farmer:
        return None

    return farm_repository.create_farm(db, farm_helper)


def get_farm_by_id(db, farm_id):

    return farm_repository.get_farm_by_id(db, farm_id)


def get_farms_by_farmer_id(db, farmer_id):

    farmer = farmer_repository.get_farmer_by_id(db, farmer_id)

    if not farmer:
        return None

    return farm_repository.get_farms_by_farmer_id(db, farmer_id)


def get_all_farms(db):

    return farm_repository.get_all_farms(db)


def update_farm(db, farm_id, update_data):

    return farm_repository.update_farm(db, farm_id, update_data)


def delete_farm(db, farm_id):

    return farm_repository.delete_farm(db, farm_id)
