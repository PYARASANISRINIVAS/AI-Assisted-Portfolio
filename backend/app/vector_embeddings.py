
from langchain_text_splitters import MarkdownHeaderTextSplitter
from langchain_community.vectorstores import FAISS

from config import embedding_model
# loading the markdown file

with open(r"..\knowledge_base\Personal_Knowledge_Base.md","r") as f:
    data=f.read()


# splitting the text file 

splitter=MarkdownHeaderTextSplitter(
    headers_to_split_on=[("#","level 1"),
                         ("##","level 2"),
                         ("###","level 3")
                         ],
                         strip_headers=False,
                         )

chunks=splitter.split_text(data)



db=FAISS.from_documents(
    documents=chunks,
    embedding=embedding_model
)


db.save_local(r"FAISS","faiss_index")





