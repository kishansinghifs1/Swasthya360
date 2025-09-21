from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import base64
from io import BytesIO
from PIL import Image
from config import groq_api_key

from groq import Groq

client = Groq(api_key=groq_api_key)

from ai_agent import graph, system_prompt, parse_response
from langchain_core.messages import SystemMessage, HumanMessage

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    message: str

class ImageQuery(BaseModel):
    prompt: str = "" 

def convert_image_to_base64_url(image_bytes: bytes) -> str:
    """Convert image bytes to base64 data URL format"""
    image = Image.open(BytesIO(image_bytes))

    buffered = BytesIO()
    if image.mode in ('RGBA', 'LA', 'P'):
        image = image.convert('RGB')
    image.save(buffered, format="JPEG")
    
    # Encode to base64
    img_base64 = base64.b64encode(buffered.getvalue()).decode()
    return f"data:image/jpeg;base64,{img_base64}"

@app.get("/api/v1/chat")
def root():
    return {"message": "Swasthya360 API is running"}

@app.post("/api/v1/chat")
async def chat(query: Query):
    messages = [
        SystemMessage(content=system_prompt), 
        HumanMessage(content=query.message), 
    ]
    stream = graph.stream({"messages": messages}, stream_mode="updates")
    tool_called_name, final_response = parse_response(stream)
    return {"tool_called": tool_called_name, "response": final_response}

@app.post("/transcribe")
async def transcribe(file: UploadFile = File(...)):
    contents = await file.read()
    transcription = client.audio.transcriptions.create(
        file=(file.filename, contents),
        model="whisper-large-v3",
        response_format="verbose_json",
    )
    return {"text": transcription.text}

@app.post("/image-to-text")
async def image_to_text(file: UploadFile = File(...), prompt: str = ""):
    """
    Extract text/information from an uploaded image using Groq's vision model
    """
    try:
        if not file.content_type or not file.content_type.startswith('image/'):
            return {"error": "File must be an image"}
        
        contents = await file.read()
        
        image_data_url = convert_image_to_base64_url(contents)
        
        messages = [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": prompt if prompt else "Describe what you see in this image in detail."
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": image_data_url
                        }
                    }
                ]
            }
        ]
        
        completion = client.chat.completions.create(
            model="meta-llama/llama-4-scout-17b-16e-instruct",
            messages=messages,
            temperature=0.7,
            max_completion_tokens=1024,
            top_p=1,
            stream=False 
        )
        
        response_text = completion.choices[0].message.content
        
        return {
            "filename": file.filename,
            "prompt": prompt if prompt else "Describe what you see in this image in detail.",
            "response": response_text
        }
        
    except Exception as e:
        return {"error": f"Failed to process image: {str(e)}"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)