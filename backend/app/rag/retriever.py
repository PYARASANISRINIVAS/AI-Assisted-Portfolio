from langchain_community.retrievers import BM25Retriever
from langchain_classic.retrievers import EnsembleRetriever

# Your existing splitted documents
from app.rag.knowledge_base import splitted

# Your existing vector store
from app.rag.knowledge_base import vector_store


# BM25
bm25_retriever = BM25Retriever.from_documents(
    splitted
)

bm25_retriever.k = 5


# Vector search
vector_retriever = vector_store.as_retriever(
    search_type="similarity",
    search_kwargs={
        "k": 5
    }
)


# Hybrid retrieval
hybrid_retriever = EnsembleRetriever(
    retrievers=[
        bm25_retriever,
        vector_retriever
    ],
    weights=[
        0.5,
        0.5
    ]
)