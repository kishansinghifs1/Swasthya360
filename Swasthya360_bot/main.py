from fastapi import FastAPI, UploadFile, File, HTTPException
from pydantic import BaseModel
import uvicorn
import os
import tempfile
import base64
from groq import Groq
from config import groq_api_key
from ai_agent import graph, system_prompt, parse_response
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",  # optional, in case you use 127.0.0.1
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,       # Frontend origins allowed
    allow_credentials=True,
    allow_methods=["*"],         # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],         # Allow all headers
)

client = Groq(api_key=groq_api_key)

class Query(BaseModel):
    message: str

@app.get("/health")
async def health_check():
    return {"status": "healthy", "message": "API is running"}

@app.post("/ask")
async def ask(query: Query):
    inputs = {"messages": [("system", system_prompt), ("user", query.message)]}
    stream = graph.stream(inputs, stream_mode="updates")
    tool_called_name, final_response = parse_response(stream)
    return {"response": final_response}

@app.post("/ask/image")
async def ask_with_image(file: UploadFile = File(...)):
    try:
        if not file.content_type.startswith("image/"):
            raise HTTPException(status_code=400, detail="File must be an image")
        
        image_content = await file.read()
        image_base64 = base64.b64encode(image_content).decode('utf-8')
        
        completion = client.chat.completions.create(
            model="meta-llama/llama-4-maverick-17b-128e-instruct", 
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": "Describe this image in detail. What do you see?"
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:{file.content_type};base64,{image_base64}"
                            }
                        }
                    ]
                }
            ],
            temperature=0.1,
            max_completion_tokens=1024,
        )
        image_text = completion.choices[0].message.content
        inputs = {"messages": [("system", system_prompt), ("user", image_text)]}
        stream = graph.stream(inputs, stream_mode="updates")
        tool_called_name, final_response = parse_response(stream)
        
        return {
            "response": final_response,
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")

@app.post("/ask/voice")
async def ask_with_voice(file: UploadFile = File(...)):
    try:
        allowed_audio_types = [
            "audio/mpeg", "audio/mp4", "audio/m4a", "audio/wav", 
            "audio/webm", "audio/ogg", "audio/flac"
        ]
        if file.content_type not in allowed_audio_types:
            raise HTTPException(
                status_code=400, 
                detail="File must be an audio file (mp3, m4a, wav, webm, ogg, flac)"
            )
        
        with tempfile.NamedTemporaryFile(delete=False, suffix=os.path.splitext(file.filename)[1]) as temp_file:
            audio_content = await file.read()
            temp_file.write(audio_content)
            temp_filename = temp_file.name
        
        try:
            with open(temp_filename, "rb") as audio_file:
                transcription = client.audio.transcriptions.create(
                    file=(temp_filename, audio_file.read()),
                    model="whisper-large-v3-turbo",
                    response_format="verbose_json",
                )
                
            transcribed_text = transcription.text
            inputs = {"messages": [("system", system_prompt), ("user", transcribed_text)]}
            stream = graph.stream(inputs, stream_mode="updates")
            tool_called_name, final_response = parse_response(stream)
            
            return {
                "response": final_response,
            }
        finally:
            if os.path.exists(temp_filename):
                os.unlink(temp_filename)
                
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing audio: {str(e)}")


# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
