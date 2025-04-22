"use client";

import React from "react";
import { useState } from "react";
import ImageEncryptor from "./encrypt";
import RetrieveDecrypt from "./retrieve";

export default function Content() {

const [expanded_paper, setExpanded_paper] = useState(false);
const [expanded_framework, setExpanded_framework] = useState(false);
const [expanded_contributions, setExpanded_contributions] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="w-screen flex flex-col items-center">
        <div className="max-w-4xl space-y-8 p-8 w-full">
  
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Intro Header */}
            <header className="text-center space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-cyan-400">🔍 Blockchain-Based Forensic Framework</h1>
            </header>
  
            {/* Section 1: The Paper */}
            <section className="space-y-4 border-l-4 border-cyan-500 pl-6">
              <h2 className="text-2xl font-semibold text-cyan-300">📄 A glimpse behind the research.</h2>
              <p className="text-gray-200">
        As a part of my undergraduate program I published a research paper titled <span className="italic">“A Blockchain-Based Private Framework for Facilitating Digital Forensics Using IoT”. </span>
        The paper explores a novel way of leveraging blockchain to preserve the integrity of digital evidence in real-time, especially from resource-constrained IoT environments.
      </p>
          <p className="text-gray-200">
            The Idea of the paper is to:
          </p>
      {!expanded_paper ? (
        <button
          onClick={() => setExpanded_paper(true)}
          className="text-sm text-cyan-400 hover:underline"
        >
          Show more ⬎
        </button>
      ) : (
        <>
          <ul className="list-disc list-inside text-gray-400 pl-2">
            <li>Create a privately stored distributed blockchain network from scratch.</li>
            <li>Assign different roles like a server, a node, or an access point to different devices in the network.</li>
            <li>Host the blockchain over a VPN and restrict access to it via IP monitoring to ensure confidentiality of data.</li>
            <li>Encrypt the data using mixed ciphers specific to each device in the network.</li>
          </ul>
          <a
            href="https://tarupublications.com/doi/10.47974/JDMSC-1733"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-cyan-400 hover:underline"
          >
            🔗 View full paper
          </a>
          <button
            onClick={() => setExpanded_paper(false)}
            className="block text-sm text-cyan-400 hover:underline mt-2"
          >
            Show less ⬏
          </button>
        </>
      )}
    </section>
  
            {/* Section 3: The Working Framework */}
            <section className="space-y-4 border-l-4 border-purple-500 pl-6">
              <h2 className="text-2xl font-semibold text-purple-300">🛠️ The Framework</h2>
              <p className="text-gray-200">
                This app is supposed to be a little demo of the framework presented in the paper. 
                The frontend acts as an access point allowing users to upload an image, encrypt it, store it on a privately hosted blockchain network, and retrieve it using its hash. 
              </p>
          <p className="text-gray-200">
              How it works:
          </p>

              {!expanded_framework ? (
        <button
          onClick={() => setExpanded_framework(true)}
          className="text-sm text-purple-400 hover:underline"
        >
          Show more ⬎
        </button>
      ) : (
        <>
              <ul className="list-disc list-inside text-gray-400 pl-2">
                <li>Before being uploaded to the blockchain, the data is encrypted at the frontend using a key provided by the user.</li>
                <li>The encrypted data is then sent to the backend where it is added to the blockchain and the hash is generated.</li>
                <li>The user can retrieve the data using the hash, and then the data is decrypted at the frontend using the key.</li>
              </ul>
  
              <p className="text-gray-200">
                To allow users to retrieve an image without uploading one, I&apos;m making the hash and the key of the first block public.
              </p>
              <ul className="list-disc list-inside text-gray-400 pl-2">
                <li><span className="break-words">Hash : 48da144330e9bf029be3d8c6695c0711ee941060e4e53c574418e97658cd303c</span></li>
                <li>Key : open block</li>
              </ul>
              <p className="text-xs text-gray-200">
                Since this is a demo and I host this blockchain on a single node using a Raspberry Pi, there is a limit to how much data I can store. I might clear it out at certain points to allow newer blocks to be added. 
                I have also added a cap of 1 MB to the images that can be added to the blockchain.
              </p>

          <button
            onClick={() => setExpanded_framework(false)}
            className="block text-sm text-purple-400 hover:underline mt-2"
          >
            Show less ⬏
          </button>
        </>
      )}
            </section>

            <ImageEncryptor />
            <RetrieveDecrypt />
  
            {/* Section 2: My Contribution */}
            <section className="space-y-4 border-l-4 border-green-500 pl-6">
              <h2 className="text-2xl font-semibold text-green-300">🧠 My Contribution</h2>
              <p className="text-gray-200">
                Beyond writing the paper, I developed the core logic, security mechanism, and data structures powering this framework. The goal was to bridge theory and implementation for real-world impact.
              </p>
              <ul className="list-disc list-inside text-gray-400 pl-2">
                <li>Implemented SHA-256 based block hashing in Python</li>
                <li>Used symmetric encryption to protect uploaded image data</li>
                <li>Designed the block structure to include metadata like timestamp and previous hash</li>
                <li>Built a simple yet functional chain validation mechanism</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
  
//   );
}
