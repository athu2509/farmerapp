class FarmHelper:

    def __init__(
        self,
        id=None,
        farmer_id=None,
        area=None,
        village=None,
        crop_name=None,
        sowing_date=None
    ):

        self.id = id
        self.farmer_id = farmer_id
        self.area = area
        self.village = village
        self.crop_name = crop_name
        self.sowing_date = sowing_date

    @classmethod
    def from_dict(cls, data):

        return cls(
            farmer_id=data.get("farmer_id"),
            area=data.get("area"),
            village=data.get("village"),
            crop_name=data.get("crop_name"),
            sowing_date=data.get("sowing_date")
        )

    def to_dict(self):

        return {
            "id": str(self.id) if self.id else None,
            "farmer_id": str(self.farmer_id) if self.farmer_id else None,
            "area": self.area,
            "village": self.village,
            "crop_name": self.crop_name,
            "sowing_date": str(self.sowing_date) if self.sowing_date else None
        }
