"""
This module defines the SQLAlchemy declarative base for ORM models.
It provides a `Base` class that should be inherited by all model classes
to enable SQLAlchemy's ORM features such as table mapping and schema generation.
"""

from sqlalchemy.orm import declarative_base

# Create a declarative base class for SQLAlchemy ORM models
Base = declarative_base()
