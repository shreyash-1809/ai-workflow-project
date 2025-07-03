# ai-workflow-backend/routers/workflow.py

from fastapi import APIRouter

router = APIRouter()

@router.get("/test-workflow")
def test_workflow():
    return {"message": "Workflow route working!"}
