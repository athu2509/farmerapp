class FarmerHelper:

    def __init__(self, name, phone_number, language, country, id=None):

        self.id = id
        self.name = name
        self.phone_number = phone_number
        self.language = language
        self.country = country

    @classmethod
    def from_dict(cls, data):

        return cls(
            name=data.get("name"),
            phone_number=data.get("phone_number"),
            language=data.get("language"),
            country=data.get("country")
        )

    def to_dict(self):

        return {
            "id": str(self.id) if self.id else None,
            "name": self.name,
            "phone_number": self.phone_number,
            "language": self.language,
            "country": self.country
        }
