from app.config.database import SessionLocal
from faker import Faker
from datetime import date, timedelta
import random

from app.models.farmer import Farmer
from app.models.farm import Farm
from app.models.schedule import Schedule

fake = Faker("en_IN")
from app.services.user import (
    create_user,
    get_user_by_email,
    get_super_user
)

def seed_users():
    db = SessionLocal()

    try:

        # Super user
        if not get_super_user(db):
            create_user(
                db=db,
                name="Super User",
                email="superuser@farmerapp.com",
                password="super123",
                roles=["SUPER_USER", "ADMIN", "USER"]
            )
            print("Super user created")
        else:
            print("⏭ Super user already exists")

        # Admin
        if not get_user_by_email(db, "admin@farmerapp.com"):
            create_user(
                db=db,
                name="Admin",
                email="admin@farmerapp.com",
                password="admin123",
                roles=["ADMIN", "USER"]
            )
            print("Admin created")
        else:
            print("⏭ Admin already exists")
        if not get_user_by_email(db, "user@farmerapp.com"):
            create_user(
                db=db,
                name="Regular User",
                email="user@farmerapp.com",
                password="user123",
                roles=["USER"]
            )
            print("User created")

    finally:
        db.close()
def seed_farmers( count=10):
    db = SessionLocal()
    farmers = []

    for _ in range(count):

        phone = fake.unique.msisdn()[:10]

        farmer = Farmer(
            name=fake.name(),
            phone_number=phone,
            language=random.choice([
                "English",
                "Kannada",
                "Hindi"
            ]),
            country="India"
        )

        db.add(farmer)
        farmers.append(farmer)

    db.commit()

    for farmer in farmers:
        db.refresh(farmer)

    print(f"{count} farmers created")

    return farmers
def seed_farms( farmers):
    db = SessionLocal()
    farms = []

    crops = [
        "Sugarcane",
        "Cotton",
        "Rice",
        "Wheat",
        "Maize"
    ]

    for farmer in farmers:

        number_of_farms = random.randint(1, 3)

        for _ in range(number_of_farms):

            farm = Farm(
                farmer_id=farmer.id,
                area=f"{random.randint(1,10)} acres",
                village=fake.city(),
                crop_name=random.choice(crops),
                sowing_date=fake.date_between(
                    start_date="-60d",
                    end_date="today"
                )
            )

            db.add(farm)
            farms.append(farm)

    db.commit()

    for farm in farms:
        db.refresh(farm)

    print(f"{len(farms)} farms created")

    return farms
def seed_schedules( farms):
    db = SessionLocal()
    tasks = [
        "Weeding",
        "Irrigation",
        "First Fertilizer",
        "Second Fertilizer",
        "Pesticide Spray"
    ]

    fertilizers = [
        "Urea",
        "DAP",
        "Potash",
        "NPK"
    ]

    schedules = []

    for farm in farms:

        for day in [15, 30, 45]:

            schedule = Schedule(
                farm_id=farm.id,
                task_name=random.choice(tasks),
                days_after_sowing=day,
                due_date=farm.sowing_date + timedelta(days=day),
                status="pending",
                fertilizer=random.choice(fertilizers),
                quantity=random.randint(10, 50),
                quantity_unit="kg"
            )

            db.add(schedule)
            schedules.append(schedule)

    db.commit()

    print(f"{len(schedules)} schedules created")
if __name__ == "__main__":
    seed_users()