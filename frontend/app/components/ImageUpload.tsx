import { useState } from "react";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ImageUpload = () => {
  const [image, setImage] = useState<File | null>(null);
  const [key, setKey] = useState("");

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
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };


  // const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (!file) return;
  
  //   const validFormats = ["image/jpeg", "image/png", "image/bmp", "image/tiff"];
  //   if (!validFormats.includes(file.type)) {
  //     alert("Invalid file format! Please upload an image (JPG, PNG, BMP, or TIFF).");
  //     return;
  //   }
  
  //   const formData = new FormData();
  //   formData.append("image", file);
  
  //   try {
  //     const response = await fetch(`${apiUrl}/upload`, {
  //       method: "POST",
  //       body: formData,
  //     });
  
  //     const data = await response.json();
  //     alert(`Image uploaded successfully! Blockchain Hash: ${data.hash}`);
  //   } catch (error) {
  //     console.error("Upload failed:", error);
  //     alert("Failed to upload image.");
  //   }
  // };

  return (
    <div className="p-4 text-center  flex flex-col justify-between items-center">
      <input
        type="file"
        accept=".jpg,.jpeg,.png,.bmp,.tiff,.tif"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="border p-2"
      />
      {/* {image && (
        <div className="mt-4 text-center">
          <h3>Uploaded Image:</h3>
          <img src={image} alt="Uploaded" className="max-w-xs " />
        </div>
      )} */}
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

      <div className="size-[30%]">
        <h3>hash value should be here</h3>
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