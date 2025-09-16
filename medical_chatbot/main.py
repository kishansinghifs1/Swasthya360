from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

from ai_agent import graph, system_prompt, parse_response
from langchain_core.messages import SystemMessage, HumanMessage

app = FastAPI()


class Query(BaseModel):
    message: str

@app.get("/")
def root():
    return {"message": "Swasthya360 API is running"}

@app.post("/api/v1/chat")
async def chat(query: Query):
    messages = [
        SystemMessage(content=system_prompt),  # system instructions
        HumanMessage(content=query.message),  # user query
    ]

    # Stream the conversation
    stream = graph.stream({"messages": messages}, stream_mode="updates")

    # Parse response
    tool_called_name, final_response = parse_response(stream)
    return {"tool_called": tool_called_name, "response": final_response}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
