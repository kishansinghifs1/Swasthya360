from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
import uvicorn

from ai_agent import graph, system_prompt, parse_response
from database import SessionLocal, Base  # your automap Base
from database import engine  # if needed for reflection

# Automap tables
Base.prepare(engine, reflect=True)
User = Base.classes.User
ChatHistory = Base.classes.ChatHistory

app = FastAPI()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Request body
class Query(BaseModel):
    message: str
    userId: str   # <- frontend must send this


@app.post("/ask")
async def ask(query: Query):
    inputs = {"messages": [("system", system_prompt), ("user", query.message)]}
    stream = graph.stream(inputs, stream_mode="updates")
    tool_called_name, final_response = parse_response(stream)

    # Save user message
    user_chat = ChatHistory(
        message=query.message,
        sender="USER",
        userId=query.userId
    )
    db.add(user_chat)

    # Save AI response
    ai_chat = ChatHistory(
        message=final_response,
        sender="AGENT",
        userId=query.userId
    )
    db.add(ai_chat)
    db.commit()

    return {
        "response": final_response,
        "tool_called": tool_called_name
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
