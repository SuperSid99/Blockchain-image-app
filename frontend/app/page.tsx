"use client"; 

// import Header from "./components/Header.js";
// import ImageUpload from "./components/ImageUpload";
// import BlockchainStatus from "./components/BlockchainStatus.js";
// import ResearchProject from "./components/project.js";
// import { useState } from "react";


import ImageEncryptor from "./components/encrypt";
import RetrieveDecrypt from "./components/retrieve";

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center min-h-screen p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Blockchain Image Encryptor</h1>
      <ImageEncryptor />
      <RetrieveDecrypt />
    </main>
  );
}


// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen p-6 space-y-8">
//       {/* Other Components */}
//     </main>
//   );
// }


// export default function Page() {
//   const [hash, setHash] = useState(null);

//   const handleImageProcessing = (image) => {
//     const generatedHash = "abc123xyz"; // Placeholder logic
//     setHash(generatedHash);
//   };

//   return (
//     <div>
//       <Header />
//       <main className="p-4">
//         <ResearchProject/>
//         <h2 className="text-xl text-center  mb-4">Upload an Image for Processing</h2>
//         <ImageUpload onProcessImage={handleImageProcessing} />
//         <BlockchainStatus hash={hash} />
//       </main>
//     </div>
//   );
// }
