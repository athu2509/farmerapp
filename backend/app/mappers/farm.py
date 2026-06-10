from app.models.farm import Farm
from app.helpers.farm import FarmHelper


def helper_to_model(farm_helper):

    return Farm(
        farmer_id=farm_helper.farmer_id,
        area=farm_helper.area,
        village=farm_helper.village,
        crop_name=farm_helper.crop_name,
        sowing_date=farm_helper.sowing_date
    )


def model_to_helper(farm_model):

    return FarmHelper(
        id=farm_model.id,
        farmer_id=farm_model.farmer_id,
        area=farm_model.area,
        village=farm_model.village,
        crop_name=farm_model.crop_name,
        sowing_date=farm_model.sowing_date
    )