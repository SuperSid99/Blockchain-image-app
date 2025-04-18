"use client";

import { useState, useEffect } from "react";

import {decryptImage} from"./decrypt";

import ImageViewer from "./image_viewer";


const apiUrl = process.env.NEXT_PUBLIC_API_URL;


function TypingAnimation() {
  const [text, setText] = useState("");

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    intervalId = setInterval(() => {
      const randomChar = String.fromCharCode(33 + Math.floor(Math.random() * 94)); // ASCII 33-126
      setText(prev => (prev.length > 40 ? randomChar : prev + randomChar));
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center">

    <div className="mt-4 text-White-500 font-mono text-sm h-6">
      <h3 className="font-semibold">
       Retrieving Data:
      </h3>
    </div>
    <div className="mt-4 text-green-500 font-mono text-sm h-6">
      <h3 className="font-semibold">{text}</h3>
    </div>
    </div>
  );
}


export default function RetrieveDecrypt() {
  const [hash, setHash] = useState("");
  const [key, setKey] = useState("");
  // const [encryptedData, setEncryptedData] = useState<string | null>(null);
  const [imageData, setImageData] = useState<number[][][] | null>(null);
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRetrieve = async () => {
    try {

      setLoading(true)
      const response = await fetch(`${apiUrl}/retrieve/${hash}`);
      const data = await response.json();

      console.log(data)
      
      if(data=="no results found"){

        setLoading(false); // ✅ Stop loading animation
        setError("Wrong hash");
        return
      }

      if (data.error) {

        setLoading(false); // ✅ Stop loading animation
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

        setLoading(false); // ✅ Stop loading animation
        setImageData([[[]]])
        setError("wrong key");
      }
      else{
        setLoading(false); // ✅ Stop loading animation
        setImageData(check_key)
      }


    } catch (error) {
      setError(`Error fetching image data. : ${error}`);
      // setEncryptedData(null);
    }  finally {
      setLoading(false); // ✅ Stop loading animation
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

      {loading && <TypingAnimation />}

      {!loading && imageData !== null && (
        <div className="size-[30%]">
          <ImageViewer pixelData={imageData} />
        </div>
      )}
    </div>
  );
}
