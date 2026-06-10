from app.models.farmer import Farmer
from app.helpers.farmer import FarmerHelper


def helper_to_model(helper):

    return Farmer(
        name=helper.name,
        phone_number=helper.phone_number,
        language=helper.language,
        country=helper.country
    )


def model_to_helper(model):

    return FarmerHelper(
        id=model.id,
        name=model.name,
        phone_number=model.phone_number,
        language=model.language,
        country=model.country
    )