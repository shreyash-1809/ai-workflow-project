import openai
import chromadb

openai.api_key = "your-openai-key"
client = chromadb.Client()
collection = client.get_or_create_collection("docs")

def get_embedding(text):
    result = openai.Embedding.create(input=[text], model="text-embedding-ada-002")
    return result["data"][0]["embedding"]

def query_embedding(text):
    result = collection.query(query_texts=[text], n_results=1)
    return result["documents"][0][0] if result["documents"] else "No match"
