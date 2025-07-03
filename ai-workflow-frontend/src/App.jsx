// 📁 ai-workflow-frontend/src/App.jsx
import React, { useState } from "react";
import UploadFile from "./components/UploadFile";
import ChatBox from "./components/ChatBox";
import WorkflowBuilder from "./pages/WorkflowBuilder";
import { runWorkflowFromNodes } from "./utils/workflowRunner";

function App() {
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    setIsRunning(true);
    await runWorkflowFromNodes();
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 flex items-center gap-2 text-gray-800">
        🧠 AI Workflow Builder
      </h1>

      {/* Workflow Canvas */}
      <div className="w-full max-w-6xl mx-auto mb-12">
        <WorkflowBuilder />
      </div>

      {/* Run Workflow Button */}
      <div className="mb-12 text-center">
        <button
          onClick={handleRun}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded shadow-md transition"
        >
          ▶️ Run Workflow
        </button>
        {isRunning && (
          <p className="text-sm text-gray-600 mt-2">Running workflow...</p>
        )}
      </div>

      {/* Upload and Chat */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mx-auto">
        <UploadFile />
        <ChatBox />
      </div>
    </div>
  );
}

export default App;