
#--------------------------------
## Human Evaluation
#--------------------------------
## Creating the data set with the question and the retrieved chunks

from config import golden_dataset
from config import embedding_model
import pandas as pd
from langchain_community.vectorstores import FAISS
from langchain_community.retrievers import BM25Retriever
from langchain_classic.retrievers import EnsembleRetriever
from vector_embeddings import chunks 
from sentence_transformers import CrossEncoder


#--------------------------------
# Semantic search 
#--------------------------------

# defining the database 
db=FAISS.load_local(r"FAISS",
                    embeddings=embedding_model,
                    index_name="faiss_index",
                    allow_dangerous_deserialization=True)


# defining the retriever
retriever = db.as_retriever(
    search_type="mmr",
    search_kwargs={"k": 5}
)


#--------------------------------
# Key word Search 
#--------------------------------   

# bm25retriever=BM25Retriever.from_documents(chunks)
# bm25retriever.k=5



#--------------------------------
# Reranking
#--------------------------------


reranker = CrossEncoder("BAAI/bge-reranker-base")


def rerank_documents(query, documents, top_n=3):

    pairs = [(query, doc.page_content) for doc in documents]

    scores = reranker.predict(pairs)

    ranked_documents = sorted(zip(documents, scores),key=lambda x: x[1],reverse=True)

    return ranked_documents[:top_n]





#--------------------------------
# Creating the CSV FILE 
#--------------------------------
# retreving the chunks 
output_data=[]
iteration = 1
for i in golden_dataset:

    print(f"retriving question {iteration}")

    # Semantic based Retrieval
    chunks_all=retriever.invoke(i["question"])  

    # keyword based retrieval 
    # chunks_all=bm25retriever.invoke(i["question"]) 

    # reranking 
    reranked_docs = rerank_documents(i['question'], chunks_all, top_n=5)
    chunks_all = [doc for doc, score in reranked_docs]

    chunks={
        "chunk1":chunks_all[0].page_content,
        "chunk2":chunks_all[1].page_content,
        "chunk3":chunks_all[2].page_content,
        "chunk4":chunks_all[3].page_content,
        "chunk5":chunks_all[4].page_content

    }
        

    struc={
        'question':i['question'],
        'expected_answer':i['expected_answer']        
    }
    output_data.append(struc|chunks)
    print(f"Iteration {iteration} completed ")
    iteration+=1
    # if iteration ==5:
    #     break 

# Creating the excel
df=pd.DataFrame(output_data)
df.to_csv("evaluation_reranking.csv",index=False)
print("**********************************************")
print("CSV Created ")








