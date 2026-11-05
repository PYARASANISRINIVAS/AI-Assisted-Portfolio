from langchain_docling.loader import DoclingLoader
from langchain_docling.loader import ExportType

from langchain_text_splitters import MarkdownHeaderTextSplitter

from langchain_huggingface import HuggingFaceEmbeddings
from langchain_core.vectorstores import InMemoryVectorStore

from langchain_community.retrievers import BM25Retriever
from langchain_classic.retrievers import EnsembleRetriever


# --------------------------------
# 1. GitHub README URLs
# --------------------------------

readme_urls = [
    "https://raw.githubusercontent.com/PYARASANISRINIVAS/AirWrite_AI-Real_Time_Handwritten_Letter_Recognition_Using_MediaPipe/main/README.md",

    "https://raw.githubusercontent.com/PYARASANISRINIVAS/CyberShield_AI-An_Cyberbullying_Detection_and_Classification-System/main/README.md",

    "https://raw.githubusercontent.com/PYARASANISRINIVAS/AgriYield_AI-Intelligent_Crop_Yield_Prediction_for_Indian_Agriculture/main/README.md",

    "https://raw.githubusercontent.com/PYARASANISRINIVAS/TrafficSign-AI-Traffic-Sign-Alert-System/main/README.md",

    "https://raw.githubusercontent.com/PYARASANISRINIVAS/Decoding_Delhi_Air_Quality--AQI_and_Weather_Analysis_2025/main/README.md",

    "https://raw.githubusercontent.com/PYARASANISRINIVAS/Student-Stress-Prediction/main/README.md",
]


# --------------------------------
# 2. Load GitHub READMEs
# --------------------------------

documents = []

for url in readme_urls:

    loader = DoclingLoader(
        file_path=url,
        export_type=ExportType.MARKDOWN
    )

    for document in loader.lazy_load():
        documents.append(document)


# # --------------------------------
# # 3. Load Resume PDF
# # --------------------------------

# resume_path = "knowledge/resume/resume.pdf"

# loader = DoclingLoader(
#     file_path=resume_path,
#     export_type=ExportType.MARKDOWN
# )

# for document in loader.lazy_load():

#     document.metadata["source"] = "resume"

#     documents.append(document)


# --------------------------------
# 4. Split documents
# --------------------------------

headers_to_split_on = [
    ("#", "Header 1"),
    ("##", "Header 2"),
    ("###", "Header 3"),
]

markdown_splitter = MarkdownHeaderTextSplitter(
    headers_to_split_on=headers_to_split_on,
    strip_headers=False
)


splitted = []

for document in documents:

    chunks = markdown_splitter.split_text(
        document.page_content
    )

    # # Preserve source metadata
    # for chunk in chunks:
    #     chunk.metadata.update(document.metadata)

    splitted.extend(chunks)


# --------------------------------
# 5. Create embeddings
# --------------------------------

embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)


# --------------------------------
# 6. Vector store
# --------------------------------

vector_store = InMemoryVectorStore(
    embeddings
)

vector_store.add_documents(
    documents=splitted
)


# --------------------------------
# 7. Vector retriever
# --------------------------------

vector_retriever = vector_store.as_retriever(
    search_type="similarity",
    search_kwargs={
        "k": 5
    }
)


# --------------------------------
# 8. BM25 retriever
# --------------------------------

bm25_retriever = BM25Retriever.from_documents(
    splitted
)

bm25_retriever.k = 5


# --------------------------------
# 9. Hybrid retriever
# --------------------------------

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