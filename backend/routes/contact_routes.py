from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from utils.database import get_db
from schemas.contact_schema import ContactCreate, ContactOut
from models.contact import Contact


router = APIRouter()

@router.post("/contacts", response_model=ContactOut, status_code=status.HTTP_201_CREATED)
def create_contact(contact: ContactCreate, db: Session = Depends(get_db),):
    """Create a new contact entry"""
    new_contact = Contact(
        name=contact.name,
        email=contact.email,
        message=contact.message
    )
    db.add(new_contact)
    db.commit()
    db.refresh(new_contact)
    return {
        "id": new_contact.id,
        "name": new_contact.name,
        "email": new_contact.email,
        "message": new_contact.message
    }