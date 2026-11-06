from vector_embeddings import chunks
count=0
for chunk in chunks:
    print("************")
    print(chunk.page_content)
    print(chunk.metadata)
    print("************")
    count+=1
    if count==10: break