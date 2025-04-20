"use client"; 

import Content from "./components/content";
import ImageEncryptor from "./components/encrypt";
import RetrieveDecrypt from "./components/retrieve";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center min-h-screen space-y-8">
      <Content/>
      {/* <h1 className="text-2xl font-bold mb-4">Blockchain Image Encryptor</h1> */}
      {/* <ImageEncryptor />
      <RetrieveDecrypt /> */}
    </main>
  );
}