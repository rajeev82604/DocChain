import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file first");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      // 🔐 Call YOUR backend instead of Pinata directly
      const resFile = await axios.post(
        "http://localhost:5000/upload", // <-- backend endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;

      await contract.add(account, ImgHash);

      alert("Successfully Image Uploaded");

      setFileName("No image selected");
      setFile(null);
    } catch (error) {
      console.error(error);
      alert("Unable to upload image");
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];

    if (!data) return;

    setFile(data);
    setFileName(data.name);
  };

  return (
    <div className="top">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="choose">
          Choose Image
        </label>

        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />

        <span className="textArea">Image: {fileName}</span>

        <button type="submit" className="upload" disabled={!file}>
          Upload File
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
