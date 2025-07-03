from fastapi import APIRouter, Body
from utils.embedding import query_embedding
import openai
import os

router = APIRouter()
openai.api_key = os.getenv("OPENAI_API_KEY")

@router.post("/chat")
async def chat(query: str = Body(...)):
    context = query_embedding(query)
    prompt = f"Context:\n{context}\n\nQuestion:\n{query}"
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )
    return {"response": response["choices"][0]["message"]["content"]}
