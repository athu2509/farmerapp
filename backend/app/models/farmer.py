from sqlalchemy import Column, String, DateTime, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID

from app.config.database import Base

import uuid


class Farmer(Base):

    __tablename__ = "farmers"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
        unique=True,
        nullable=False
    )

    name = Column(String, nullable=False)

    phone_number = Column(
        String,
        unique=True,
        nullable=False
    )

    language = Column(String, nullable=False)

    country = Column(String, nullable=False)

    is_deleted = Column(Boolean, default=False, nullable=False)

    farms = relationship(
        "Farm",
        back_populates="farmer"
    )