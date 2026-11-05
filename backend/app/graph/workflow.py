from langgraph.graph import StateGraph, START, END

from app.graph.state import ChatState

from app.graph.nodes import (
    rewrite_query,
    retrieve_documents,
    build_context,
    generate_answer
)


# Create graph
graph = StateGraph(ChatState)


# Add nodes
graph.add_node("rewrite_query", rewrite_query)
graph.add_node("retrieve_documents", retrieve_documents)
graph.add_node("build_context", build_context)
graph.add_node("generate_answer", generate_answer)


# Define flow
graph.add_edge(START, "rewrite_query")

graph.add_edge(
    "rewrite_query",
    "retrieve_documents"
)

graph.add_edge(
    "retrieve_documents",
    "build_context"
)

graph.add_edge(
    "build_context",
    "generate_answer"
)

graph.add_edge(
    "generate_answer",
    END
)


# Compile graph
workflow = graph.compile()