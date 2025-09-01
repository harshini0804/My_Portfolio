"""Contact model"""
from sqlalchemy import Column, String, Float, Date, ForeignKey, Boolean
from sqlalchemy.dialects.postgresql import UUID
from models.base import Base
from sqlalchemy.orm import relationship
from datetime import date
import uuid


# -------------------- Contact--------------------
class Contact(Base):
    __tablename__ = "contacts"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    message = Column(String, nullable=False)
