from pydantic import BaseModel
from typing import Optional
from uuid import UUID

class ContactCreate(BaseModel):
    name: str
    email: str
    message: str

class ContactOut(BaseModel):
    id: UUID
    name: str
    email: str
    message: str

    class Config:
        orm_mode = True