// 📁 ai-workflow-frontend/src/components/Sidebar.jsx
import React from "react";

const COMPONENTS = [
  { type: "userQuery", label: "🧑 User Query" },
  { type: "knowledgeBase", label: "📄 Knowledge Base" },
  { type: "llmEngine", label: "🤖 LLM Engine" },
  { type: "output", label: "📤 Output" },
];

function Sidebar({ setNodes }) {
  const addNode = (type) => {
    setNodes((nodes) => [
      ...nodes,
      {
        id: `${type}-${Date.now()}`,
        type,
        data: {},
        position: { x: Math.random() * 300, y: Math.random() * 300 },
      },
    ]);
  };

  return (
    <div className="w-48 bg-gray-100 border-r p-4 space-y-4 flex-shrink-0">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">⚙️ Components</h3>
      {COMPONENTS.map((comp) => (
        <button
          key={comp.type}
          className="w-full text-left bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700 transition text-sm"
          onClick={() => addNode(comp.type)}
        >
          {comp.label}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
