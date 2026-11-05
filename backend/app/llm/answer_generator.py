from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate


llm = ChatGoogleGenerativeAI(
    model="gemini-3.8-flash",
    temperature=0
)


prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
You are an AI assistant for Srinivas's personal portfolio.

Answer the user's question using ONLY the provided context.

The context contains information from:
- Resume
- GitHub project documentation

Rules:
- Do not invent information.
- If the answer is not available in the context, say that the information
  is not available in the portfolio knowledge base.
- Give a clear and concise answer.
- When discussing projects, mention relevant technologies,
  algorithms, datasets, and results when available.
"""
    ),
    (
        "human",
        """
Context:

{context}


User Question:

{question}
"""
    )
])


answer_generator = prompt | llm