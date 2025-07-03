// 📁 ai-workflow-frontend/src/components/UploadFile.jsx
import React, { useState } from "react";
import axios from "axios";

function UploadFile() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Please select a PDF file first.");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:8000/upload", formData);
      setResponse(res.data.text);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">📄 Upload PDF</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-3 w-full border border-gray-300 rounded p-2"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full transition"
      >
        Upload
      </button>
      {response && (
        <div className="mt-4">
          <h3 className="font-medium text-gray-700 mb-2">📝 Extracted Text:</h3>
          <pre className="bg-gray-50 p-3 rounded max-h-48 overflow-y-auto text-sm text-gray-800">
            {response}
          </pre>
        </div>
      )}
    </div>
  );
}

export default UploadFile;
