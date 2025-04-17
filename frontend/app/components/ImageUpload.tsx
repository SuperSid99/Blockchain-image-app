import { useState } from "react";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ImageUpload = () => {
  const [image, setImage] = useState<File | null>(null);
  const [key, setKey] = useState("");
  const [hash, setHash] = useState(""); // 🔹 New state for hash

  const handleSubmit = async () => {
    if (!image || !key) {
      alert("Please provide both an image and a key.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("key", key);

    console.log(formData)

    try {
      const res = await fetch(`${apiUrl}/upload`, {
        method: "POST",
        body: formData,
      });
 
      const data = await res.json();
      console.log("Server response:", data);

      // 🔹 Update hash state from server response
      if (typeof data === "string") {
        setHash(data);
      } else {
        console.warn("No hash in response");
      }
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <div className="p-4 text-center  flex flex-col justify-between items-center">
      <input
        type="file"
        accept=".jpg,.jpeg,.png,.bmp,.tiff,.tif"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="border p-2"
      />
      <input
        type="number"
        placeholder="Enter key (e.g. case001)"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        className="border p-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload to Blockchain
      </button>

      <div className="size-[30%] mt-4 break-words">
        <h3 className="font-semibold">Hash Value:</h3>
        {/* <p className="text-xl text-white-100">{hash || "No hash yet."}</p> */}
        <p className="text-xl text-white-100">{"No hash yet."}</p>
      </div>
    </div>
  );
};

export default ImageUpload;

      // <input
      //   type="number"
      //   className="border p-2"
      // />
      // {key && (
      //   <div className="mt-4 text-center">
      //     <img src={image} alt="Uploaded" className="max-w-xs " />
      //   </div>
      // )}
      // <button className="">
      //   <h3 className="text-red-500">kjhghgf</h3>
      // </button>