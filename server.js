import express from "express";
import multer from "multer";
import axios from "axios";
import FormData from "form-data";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const upload = multer();

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const data = new FormData();
    data.append("file", req.file.buffer, req.file.originalname);

    const response = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data,
      {
        headers: {
          ...data.getHeaders(),
          pinata_api_key: process.env.PINATA_API_KEY,
          pinata_secret_api_key: process.env.PINATA_SECRET,
        },
      }
    );

    res.json({ IpfsHash: response.data.IpfsHash });
  } catch (error) {
    res.status(500).json({ error: "Upload failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
