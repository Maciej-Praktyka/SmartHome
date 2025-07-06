from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware


# from routes.cmd import router as cmd_router  # Enable only if needed

app = FastAPI()

# Enable CORS if using frontend on different port
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Lock down to your frontend in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Static files (e.g. images)
app.mount("/static/photos", StaticFiles(directory="static/photos"), name="photos")

# Register routers
app.include_router(status_router, prefix="/api/status")

