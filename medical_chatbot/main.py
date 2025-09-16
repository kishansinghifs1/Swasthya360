from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn 

app = FastAPI()


class Query(BaseModel):
    message: str


@app.post("/api/v1/chat")
async def chat(query: Query):
    return {"message": "Hello World"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)


 