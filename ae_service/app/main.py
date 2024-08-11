from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.model import ae_model

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PatientCallTranscriptionText(BaseModel):
    text: str

@app.post("/analyze/")
async def analyze(text_input: PatientCallTranscriptionText):
    try:
        result = ae_model.inference(text_input.text)
        
        return {"result": {
            "is_ae": True if result["reactions"] else False,
            "drugs": result["drugs"],
            "adverse_events": result["reactions"]
        }}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    




