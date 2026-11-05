from app.graph.state import ChatState
from app.llm.query_rewriter import query_rewriter
from app.llm.answer_generator import answer_generator
from app.rag.knowledge_base import hybrid_retriever


def rewrite_query(state: ChatState):
    response = query_rewriter.invoke({
        "question": state["question"]
    })

    refined_query = response.content

    if isinstance(refined_query, list):
        refined_query = " ".join(
            str(item) for item in refined_query
        )

    return {"refined_query": refined_query}


def retrieve_documents(state: ChatState):
    query = state["refined_query"]

    if isinstance(query, list):
        query = " ".join(str(item) for item in query)

    documents = hybrid_retriever.invoke(query)

    return {"documents": documents}


def build_context(state: ChatState):
    context = "\n\n".join(
        document.page_content
        for document in state["documents"]
    )

    return {
        "context": context
    }

def generate_answer(state: ChatState):
    response = answer_generator.invoke({
        "question": state["question"],
        "context": state["context"]
    })

    content = response.content

    if isinstance(content, list):
        content = "".join(
            item.get("text", "")
            if isinstance(item, dict)
            else str(item)
            for item in content
        )

    return {
        "answer": content
    }