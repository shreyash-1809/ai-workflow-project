# 📁 ai-workflow-backend/main.py

import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import upload, chat

# ✅ Disable ChromaDB telemetry warnings
os.environ["CHROMA_TELEMETRY_ENABLED"] = "false"

# ✅ Load environment variables (OpenAI key, etc.)
from dotenv import load_dotenv
load_dotenv()

# ✅ Initialize FastAPI app
app = FastAPI()

# ✅ Allow frontend requests (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Include routers
app.include_router(upload.router)
app.include_router(chat.router)

# ✅ Root endpoint
@app.get("/")
def root():
    return {"message": "Backend running"}
