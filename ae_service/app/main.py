from fastapi import FastAPI, HTTPException
from schema import PatientCallTranscriptionText
from model import ae_model

app = FastAPI()

@app.post("/analyze/")
async def analyze(text_input: PatientCallTranscriptionText):
    try:
        result = ae_model.inference(PatientCallTranscriptionText.text)
        
        return {"result": {
            "is_ae": True if result["reactions"] else False,
            "drugs": result["drugs"],
            "adverse_events": result["reactions"]
        }}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    




