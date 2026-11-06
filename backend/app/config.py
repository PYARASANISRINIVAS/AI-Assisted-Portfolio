# imports 

from dotenv import  load_dotenv
from langchain_groq import ChatGroq
from langchain_huggingface import HuggingFaceEmbeddings
import json


load_dotenv()


# Creating the chat model 
model=ChatGroq(
    model='openai/gpt-oss-120b',
    temperature=0,
    max_tokens=50,
)
print("Chat model created  Succesfully !  " )


# Creating the embedding model 
embedding_model=HuggingFaceEmbeddings(model="sentence-transformers/all-mpnet-base-v2")
print("embedding  model created  Succesfully !  " )

# loading the golden datset
with open(r"golden_dataset.json", "r", encoding="utf-8") as file:
    golden_dataset = json.load(file)
    print("Loaded the golden data succesfully ! ")
