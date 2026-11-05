from typing import TypedDict


class ChatState(TypedDict):

    question: str
    refined_query: str
    documents: list
    context: str
    answer: str