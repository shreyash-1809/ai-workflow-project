from fastapi import APIRouter, File, UploadFile
import fitz  # PyMuPDF

router = APIRouter()

@router.post("/upload")
async def upload(file: UploadFile = File(...)):
    contents = await file.read()
    text = ""
    with fitz.open(stream=contents, filetype="pdf") as doc:
        for page in doc:
            text += page.get_text()
    return {"text": text}
