from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate

from dotenv import load_dotenv

load_dotenv()

llm = ChatGoogleGenerativeAI(
    model="gemini-3.8-flash",
    temperature=0
)


prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
You are a query rewriting assistant for a portfolio RAG system.

Rewrite the user's question into a concise search query
that can retrieve the most relevant information from the
portfolio knowledge base.

The knowledge base contains:
- Resume information
- GitHub project information

Preserve important names, project names, technologies,
algorithms, certifications, skills, and other specific terms.

Do not answer the question.
Return only the rewritten search query.
"""
    ),
    ("human", "{question}")
])


query_rewriter = prompt | llm

