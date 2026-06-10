from app.models.schedule import Schedule

from app.helpers.schedule import ScheduleHelper


def helper_to_model(schedule_helper):

    return Schedule(
        farm_id=schedule_helper.farm_id,
        task_name=schedule_helper.task_name,
        fertilizer=schedule_helper.fertilizer,
        quantity=schedule_helper.quantity,
        quantity_unit=schedule_helper.quantity_unit,
        days_after_sowing=schedule_helper.days_after_sowing,
        due_date=schedule_helper.due_date,
        status=schedule_helper.status
    )


def model_to_helper(schedule_model):

    return ScheduleHelper(
        id=schedule_model.id,
        farm_id=schedule_model.farm_id,
        task_name=schedule_model.task_name,
        fertilizer=schedule_model.fertilizer,
        quantity=schedule_model.quantity,
        quantity_unit=schedule_model.quantity_unit,
        days_after_sowing=schedule_model.days_after_sowing,
        due_date=schedule_model.due_date,
        status=schedule_model.status
    )