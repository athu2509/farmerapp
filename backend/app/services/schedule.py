from datetime import timedelta

from app.helpers.schedule import ScheduleHelper

from app.repositories import schedule as schedule_repository
from app.repositories import farm as farm_repository

ALLOWED_STATUSES = ["pending", "completed"]


def create_schedule(db, schedule_data):

    schedule_helper = ScheduleHelper.from_dict(schedule_data)

    farm = farm_repository.get_farm_by_id(
        db,
        schedule_helper.farm_id
    )

    if not farm:
        return None

    due_date = (
        farm.sowing_date +
        timedelta(days=schedule_helper.days_after_sowing)
    )

    schedule_helper.due_date = due_date

    return schedule_repository.create_schedule(
        db,
        schedule_helper
    )


def get_schedule_by_id(db, schedule_id):

    return schedule_repository.get_schedule_by_id(
        db,
        schedule_id
    )


def get_schedules_by_farm_id(db, farm_id):

    farm = farm_repository.get_farm_by_id(
        db,
        farm_id
    )

    if not farm:
        return None

    return schedule_repository.get_schedules_by_farm_id(
        db,
        farm_id
    )


def get_all_schedules(db):

    return schedule_repository.get_all_schedules(db)


def update_schedule(db, schedule_id, update_data, farm_repository=farm_repository):

    schedule = schedule_repository.get_schedule_by_id(db, schedule_id)

    if not schedule:
        return None

    if "days_after_sowing" in update_data and update_data["days_after_sowing"] is not None:
        farm = farm_repository.get_farm_by_id(db, str(schedule.farm_id))
        if farm and farm.sowing_date:
            from datetime import date
            from datetime import timedelta as td
            update_data["due_date"] = (
                farm.sowing_date +
                td(days=update_data["days_after_sowing"])
            )

    return schedule_repository.update_schedule(
        db,
        schedule_id,
        update_data
    )


def update_schedule_status(db, schedule_id, status):

    if status not in ALLOWED_STATUSES:
        return False

    schedule = schedule_repository.get_schedule_by_id(db, schedule_id)

    if not schedule:
        return None

    return schedule_repository.update_schedule_status(
        db,
        schedule_id,
        status
    )


def delete_schedule(db, schedule_id):

    return schedule_repository.delete_schedule(db, schedule_id)


def get_schedules_due_today(db):

    return schedule_repository.get_schedules_due_today(db)


def get_schedules_due_tomorrow(db):

    return schedule_repository.get_schedules_due_tomorrow(db)
