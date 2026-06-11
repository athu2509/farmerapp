from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.config.database import Base, engine

from app.models import farmer
from app.models import farm
from app.models import schedule
from app.models.user import User

from app.views.farmer import farmer_view
from app.views.farm import farm_view
from app.views.schedule import schedule_view
from app.views.user import user_view

from seed import seed_users


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    seed_users()
    yield


app = FastAPI(
    title="Farmer Management API",
    lifespan=lifespan
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={
            "status": "error",
            "message": "An unexpected error occurred. Please try again.",
            "data": None
        }
    )


@app.get("/")
def home():
    return {
        "status": "success",
        "message": "Farmer API Running",
        "data": None
    }


app.include_router(farmer_view)
app.include_router(farm_view)
app.include_router(schedule_view)
app.include_router(user_view)