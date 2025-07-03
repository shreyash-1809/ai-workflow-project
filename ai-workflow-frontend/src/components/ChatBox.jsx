// 📁 ai-workflow-frontend/src/components/ChatBox.jsx
import React, { useState } from "react";
import axios from "axios";

function ChatBox() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return alert("Please enter a question.");

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/chat", { query });
      setAnswer(res.data.response);
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">💬 Ask a Question</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type your question..."
        className="w-full border border-gray-300 rounded p-2 mb-3"
      />
      <button
        onClick={handleAsk}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full transition"
      >
        Ask
      </button>

      {loading && <p className="mt-3 text-sm text-gray-500">Fetching response...</p>}

      {answer && (
        <div className="mt-4">
          <h3 className="font-medium text-gray-700 mb-2">🤖 GPT Response:</h3>
          <div className="bg-gray-50 p-3 rounded text-sm text-gray-800">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
