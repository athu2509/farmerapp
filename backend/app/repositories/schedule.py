from datetime import date, timedelta

from app.models.schedule import Schedule
from app.models.farm import Farm
from app.mappers.schedule import (
    helper_to_model,
    model_to_helper
)


def create_schedule(db, schedule_helper):

    farm = db.query(Farm).filter(
        Farm.id == schedule_helper.farm_id,
        Farm.is_deleted == False
    ).first()

    if not farm:
        return None

    schedule_model = helper_to_model(schedule_helper)

    db.add(schedule_model)

    db.commit()

    db.refresh(schedule_model)

    return model_to_helper(schedule_model)


def get_schedule_by_id(db, schedule_id):

    schedule_model = db.query(
        Schedule
    ).filter(
        Schedule.id == schedule_id,
        Schedule.is_deleted == False
    ).first()

    if not schedule_model:
        return None

    return model_to_helper(schedule_model)


def get_schedules_by_farm_id(db, farm_id):

    farm = db.query(Farm).filter(
        Farm.id == farm_id,
        Farm.is_deleted == False
    ).first()

    if not farm:
        return None

    schedule_models = db.query(
        Schedule
    ).filter(
        Schedule.farm_id == farm_id,
        Schedule.is_deleted == False
    ).all()

    schedule_helpers = []

    for schedule_model in schedule_models:
        schedule_helpers.append(
            model_to_helper(schedule_model)
        )

    return schedule_helpers


def get_all_schedules(db):

    schedule_models = db.query(
        Schedule
    ).filter(
        Schedule.is_deleted == False
    ).all()

    schedule_helpers = []

    for schedule_model in schedule_models:
        schedule_helpers.append(
            model_to_helper(schedule_model)
        )

    return schedule_helpers


def update_schedule(db, schedule_id, update_data):

    schedule_model = db.query(
        Schedule
    ).filter(
        Schedule.id == schedule_id,
        Schedule.is_deleted == False
    ).first()

    if not schedule_model:
        return None

    if "task_name" in update_data and update_data["task_name"] is not None:
        schedule_model.task_name = update_data["task_name"]

    if "fertilizer" in update_data and update_data["fertilizer"] is not None:
        schedule_model.fertilizer = update_data["fertilizer"]

    if "quantity" in update_data and update_data["quantity"] is not None:
        schedule_model.quantity = update_data["quantity"]

    if "quantity_unit" in update_data and update_data["quantity_unit"] is not None:
        schedule_model.quantity_unit = update_data["quantity_unit"]

    if "days_after_sowing" in update_data and update_data["days_after_sowing"] is not None:
        schedule_model.days_after_sowing = update_data["days_after_sowing"]

    if "due_date" in update_data and update_data["due_date"] is not None:
        schedule_model.due_date = update_data["due_date"]

    db.commit()
    db.refresh(schedule_model)

    return model_to_helper(schedule_model)


def update_schedule_status(db, schedule_id, status):

    schedule_model = db.query(
        Schedule
    ).filter(
        Schedule.id == schedule_id,
        Schedule.is_deleted == False
    ).first()

    if not schedule_model:
        return None

    schedule_model.status = status

    db.commit()

    db.refresh(schedule_model)

    return model_to_helper(schedule_model)


def delete_schedule(db, schedule_id):

    schedule_model = db.query(
        Schedule
    ).filter(
        Schedule.id == schedule_id,
        Schedule.is_deleted == False
    ).first()

    if not schedule_model:
        return None

    schedule_model.is_deleted = True
    db.commit()

    return True


def get_schedules_due_today(db):

    schedule_models = db.query(
        Schedule
    ).join(
        Farm,
        Schedule.farm_id == Farm.id
    ).filter(
        Schedule.due_date == date.today(),
        Schedule.is_deleted == False,
        Farm.is_deleted == False
    ).all()

    schedule_helpers = []

    for schedule_model in schedule_models:
        schedule_helpers.append(
            model_to_helper(schedule_model)
        )

    return schedule_helpers


def get_schedules_due_tomorrow(db):

    tomorrow = date.today() + timedelta(days=1)

    schedule_models = db.query(
        Schedule
    ).join(
        Farm,
        Schedule.farm_id == Farm.id
    ).filter(
        Schedule.due_date == tomorrow,
        Schedule.is_deleted == False,
        Farm.is_deleted == False
    ).all()

    schedule_helpers = []

    for schedule_model in schedule_models:
        schedule_helpers.append(
            model_to_helper(schedule_model)
        )

    return schedule_helpers
