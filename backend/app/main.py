
# FastAPI application, which we connect after the RAG pipeline is ready.

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.graph.workflow import workflow


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    question: str


@app.get("/")
def home():
    return {
        "message": "Portfolio AI Backend is running"
    }


@app.post("/api/chat")
def chat(request: ChatRequest):

    result = workflow.invoke({
        "question": request.question,
        "refined_query": "",
        "documents": [],
        "context": "",
        "answer": ""
    })

    return {
        "answer": result["answer"]
    }