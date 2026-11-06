"""
ABOUT THIS FILE:
This file implements the complete Retrieval-Augmented Generation (RAG)
pipeline for the AI-Assisted Portfolio Chatbot.

It includes document ingestion, text splitting, embedding generation,
vector storage, hybrid retrieval, query rewriting, and answer generation.
"""
from config import model
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from config import embedding_model
# response=model.invoke("hi")
# print(response.content)


db=FAISS.load_local(r"../FAISS",
                    embeddings=embedding_model,
                    index_name="faiss_index",
                    allow_dangerous_deserialization=True)


retriever = db.as_retriever(
    search_type="similarity",
    search_kwargs={"k": 5}
)


x=retriever.invoke("tell about srinivas ")

for i in x:
    print(i.page_content)
    print("**********")

