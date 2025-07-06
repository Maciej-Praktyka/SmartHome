from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def status():
    return {"status": "OK"}
@router.get("/health")
def health():
    return {"status": "healthy"}
