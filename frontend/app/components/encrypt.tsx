
"use client";

import React, { useState } from "react";
import { backend_ip } from "./ip";



export function generateKey(key: string): Record<string, string> {
    const dic: Record<string, string> = {};
    const arr: number[] = [];
    let count = 0;
    let c1 = 0;
  
    for (const char of key) {
      const num = parseInt(char);
      if (!arr.includes(num)) {
        dic[count.toString()] = char;
        arr.push(num);
        count++;
      }
    }

    let loop = 10 - Object.keys(dic).length;

    for (let i = 0; i < loop; i++) {
      let found = false;
      while (!found) {
        
        if (!arr.includes(9 - c1)) {
          dic[count.toString()] = (9 - c1).toString();
          arr.push(9 - c1);
          count++;
          c1++;
          found = true;
        } else {
          c1++;
        }
      }
    }
    return dic;
  }



function encryptImageData(imageData: number[][][], key: string): string {
    const keyDict = generateKey(key);
    let encrypted = "";
  
    const rows = imageData.length.toString();
    const cols = imageData[0].length.toString();
  
    for (const ch of rows) encrypted += keyDict[ch];
    encrypted += "-";
    for (const ch of cols) encrypted += keyDict[ch];
    encrypted += "-";
    encrypted += keyDict["3"]; // assuming RGB
    encrypted += "-";
  
    for (const row of imageData) {
      for (const col of row) {
        for (const val of col) {
          const strVal = val.toString();
          for (const ch of strVal) {
            encrypted += keyDict[ch];
          }
          encrypted += "-";
        }
      }
    }
  
    return encrypted;
  }
  

function imageToPixelArray(image: HTMLImageElement): number[][][] {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    canvas.width = image.width;
    canvas.height = image.height;
  
    context.drawImage(image, 0, 0);
    const imageData = context.getImageData(0, 0, image.width, image.height).data;
  
    const pixelArray: number[][][] = [];
    for (let i = 0; i < image.height; i++) {
      const row: number[][] = [];
      for (let j = 0; j < image.width; j++) {
        const idx = (i * image.width + j) * 4;
        const r = imageData[idx];
        const g = imageData[idx + 1];
        const b = imageData[idx + 2];
        row.push([r, g, b]);
      }
      pixelArray.push(row);
    }
    return pixelArray;
  }
  

const ImageEncryptor = () => {
  const [file, setFile] = useState<File | null>(null);
  const [key, setKey] = useState("");

  // const handleEncrypt = () => {
  //   if (!file || !key) return;

  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const img = new Image();
  //     img.onload = () => {
  //       const pixelArray = imageToPixelArray(img);
  //       const encrypted = encryptImageData(pixelArray, key);
  //       console.log("Encrypted Image Data:", encrypted);
  //       // TODO: send encrypted to backend
  //     };
  //     if (typeof reader.result === "string") img.src = reader.result;
  //   };
  //   reader.readAsDataURL(file);
  // };


  const handleEncrypt = async () => {
    if (!file || !key) return;
  
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = async () => {
        const pixelArray = imageToPixelArray(img);
        const encrypted = encryptImageData(pixelArray, key);
        // console.log("Encrypted Image Data:", encrypted);
  
        // 👉 Send to backend
        try {
          const res = await fetch(`${backend_ip}/upload`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              encrypted_image: encrypted,
              // key: key
            }),
          });
  
          const result = await res.json();
          console.log("Response from backend:", result);
        } catch (err) {
          console.error("Failed to send data to backend", err);
        }
      };
      if (typeof reader.result === "string") img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };
  

  return (
    <div>
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} />
      <input type="text" placeholder="Enter key" value={key} onChange={e => setKey(e.target.value)} />
      <button onClick={handleEncrypt}>Encrypt & Send</button>
    </div>
  );


};




export default ImageEncryptor;
