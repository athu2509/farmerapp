import uuid

from sqlalchemy import (
    Column,
    String,
    ForeignKey,
    Date,
    Boolean
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.config.database import Base


class Farm(Base):

    __tablename__ = "farms"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
        unique=True,
        nullable=False
    )

    farmer_id = Column(
        UUID(as_uuid=True),
        ForeignKey("farmers.id"),
        nullable=False
    )

    area = Column(String, nullable=False)

    village = Column(String, nullable=False)

    crop_name = Column(String, nullable=False)

    sowing_date = Column(Date, nullable=False)

    is_deleted = Column(Boolean, default=False, nullable=False)

    farmer = relationship(
        "Farmer",
        back_populates="farms"
    )

    schedules = relationship(
        "Schedule",
        back_populates="farm"
    )
