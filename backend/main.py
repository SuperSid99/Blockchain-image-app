from fastapi import FastAPI, File, UploadFile, Form, Request
import cv2
import numpy as np
import hashlib
import os

import json

from fastapi.responses import FileResponse

from fastapi.middleware.cors import CORSMiddleware

from add_blk import execute_process

from write_to_json import get_image_data

from ip import frontend_hosts


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=frontend_hosts,  # Change this to ["http://localhost:3000"] for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BLOCKCHAIN_FILE = "blockchain.json"

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)



@app.post("/upload")
async def receive_encrypted_image(data: dict):
    print(data)
    encrypted_data = data.get("encrypted_image")

    blk_hash=execute_process(encrypted_data)

    # For now, just log or print the received data
    # print("Received Encrypted Data:", encrypted_data[:100], "...")  # Truncated for brevity
    # print("Used Key:", key_used)

    # TODO: store it, write to blockchain, etc.
    # return {"message": "Image data received successfully!"}
    return (blk_hash)




@app.get("/retrieve/{image_hash}")
def retrieve_image(image_hash: str):
    # # Load blockchain data

    print(image_hash)

    image_data=get_image_data(image_hash)

    return(image_data)


    # if not os.path.exists(BLOCKCHAIN_FILE):
    #     return {"error": "Blockchain database not found."}

    # with open(BLOCKCHAIN_FILE, "r") as f:
    #     blockchain = json.load(f)

    # # Find the image in blockchain
    # for block in blockchain:
    #     if block["hash"] == image_hash:
    #         return FileResponse(block["file_path"])

    # return {"error": "Image not found."}
