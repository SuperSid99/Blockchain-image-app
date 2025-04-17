"use client";

import { useState } from "react";

import {decryptImage} from"./decrypt";

import ImageViewer from "./image_viewer";


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function RetrieveDecrypt() {
  const [hash, setHash] = useState("");
  const [key, setKey] = useState("");
  // const [encryptedData, setEncryptedData] = useState<string | null>(null);
  const [imageData, setImageData] = useState<number[][][] | null>(null);
  const [error, setError] = useState("");

  const handleRetrieve = async () => {
    try {
      const response = await fetch(`${apiUrl}/retrieve/${hash}`);
      const data = await response.json();

      console.log(data)
      
      if(data=="no results found"){
        setError("Wrong hash");
        return
      }

      if (data.error) {
        setError(data.error);
        // setEncryptedData(null);
        return;
      }
      
      // setEncryptedData(data);
      setError("");
      // console.log("here")
      
      
      // console.log(typeof(data))
      const check_key= decryptImage(data,key)
      
      if (typeof(check_key)== "string"){
        
        console.log("wrong key")
        setImageData([[[]]])
        setError("wrong key");
      }
      else{
        setImageData(check_key)
      }


    } catch (error) {
      setError("Error fetching image data.");
      // setEncryptedData(null);
    }
  };

  return (
    <div className="space-y-4 flex flex-col items-center">
      <h2 className="text-xl font-semibold">Retrieve Encrypted Image</h2>

      <input
        type="text"
        placeholder="Enter hash"
        value={hash}
        onChange={(e) => setHash(e.target.value)}
        className="border p-2 w-80 rounded"
      />

      <input
        type="text"
        placeholder="key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        className="border p-2 w-80 rounded"
      />

      <button
        onClick={handleRetrieve}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Retrieve
      </button>

      {error && <p className="text-red-500">{error}</p>}

      <div className="size-[30%]">
        <ImageViewer pixelData={imageData} />
      </div>
    </div>
  );
}
