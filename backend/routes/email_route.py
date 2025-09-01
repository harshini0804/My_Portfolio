from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
import aiosmtplib
from email.mime.text import MIMEText
from schemas.contact_schema import ContactCreate

router = APIRouter()

@router.post("/send-email")
async def send_contact_email(contact: ContactCreate):
    sender_email = "no-reply-portfolio@example.com"   # Replace with your actual SMTP sender
    recipients = ["harshinigunturi08@gmail.com", contact.email]

    subject = f"{contact.name} wants to connect"
    body = contact.message

    msg = MIMEText(body)
    msg["From"] = sender_email
    msg["To"] = ", ".join(recipients)
    msg["Subject"] = subject

    try:
        # Example using Gmail SMTP (update if using another provider)
        await aiosmtplib.send(
            msg,
            hostname="smtp.gmail.com",
            port=587,
            start_tls=True,
            # username="your_gmail@gmail.com",   # real sender account
            # password="your_app_password",      # use app password, not Gmail login
        )
        return {"status": "success", "message": "Email sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
