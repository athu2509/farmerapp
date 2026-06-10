import uuid

from sqlalchemy import (
    Column,
    String,
    Integer,
    Date,
    Float,
    ForeignKey,
    Boolean
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.config.database import Base


class Schedule(Base):

    __tablename__ = "schedules"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4
    )

    farm_id = Column(
        UUID(as_uuid=True),
        ForeignKey("farms.id"),
        nullable=False
    )

    task_name = Column(String, nullable=False)

    days_after_sowing = Column(Integer, nullable=False)

    due_date = Column(Date, nullable=False)

    status = Column(String, default="pending")

    fertilizer = Column(String)

    quantity = Column(Float)

    quantity_unit = Column(String)

    is_deleted = Column(Boolean, default=False, nullable=False)

    farm = relationship(
        "Farm",
        back_populates="schedules"
    )

