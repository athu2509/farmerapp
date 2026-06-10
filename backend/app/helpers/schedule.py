class ScheduleHelper:

    def __init__(
        self,
        farm_id,
        task_name,
        days_after_sowing,
        fertilizer,
        quantity,
        quantity_unit,
        due_date=None,
        status="pending",
        id=None
    ):

        self.id = id
        self.farm_id = farm_id
        self.task_name = task_name
        self.days_after_sowing = days_after_sowing
        self.due_date = due_date
        self.status = status
        self.fertilizer = fertilizer
        self.quantity = quantity
        self.quantity_unit = quantity_unit

    @classmethod
    def from_dict(cls, data):

        return cls(
            farm_id=data.get("farm_id"),
            task_name=data.get("task_name"),
            days_after_sowing=data.get("days_after_sowing"),
            fertilizer=data.get("fertilizer"),
            quantity=data.get("quantity"),
            quantity_unit=data.get("quantity_unit")
        )

    def to_dict(self):

        return {
            "id": str(self.id),
            "farm_id": str(self.farm_id),
            "task_name": self.task_name,
            "fertilizer": self.fertilizer,
            "quantity": self.quantity,
            "quantity_unit": self.quantity_unit,
            "days_after_sowing": self.days_after_sowing,
            "due_date": str(self.due_date),
            "status": self.status
        }