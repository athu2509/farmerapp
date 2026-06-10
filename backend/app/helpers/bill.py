class BillHelper:

    def __init__(self, farm_id, fertilizer_prices):

        self.farm_id = farm_id
        self.fertilizer_prices = fertilizer_prices

    @classmethod
    def from_dict(cls, data):

        return cls(
            farm_id=data.get("farm_id"),
            fertilizer_prices=data.get("fertilizer_prices", {})
        )