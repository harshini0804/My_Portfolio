import uvicorn
from fastapi import FastAPI
from routes.contact_routes import router as contact_router
from routes.email_route import router as email_router
from models.base import Base
from fastapi.middleware.cors import CORSMiddleware




# initialize a new fastapi project
app = FastAPI()

# Allow requests from frontend (React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact_router, prefix="/my-portfolio")
app.include_router(email_router, prefix="/my-portfolio")


if __name__ == "__main__":

    uvicorn.run(app, host="localhost", port=8000)
