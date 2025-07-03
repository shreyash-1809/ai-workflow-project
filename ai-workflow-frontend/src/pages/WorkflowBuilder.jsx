// 📁 ai-workflow-frontend/src/pages/WorkflowBuilder.jsx
import React, { useCallback, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import Sidebar from "../components/Sidebar";
import CustomNodes from "../components/CustomNodes";

const nodeTypes = {
  userQuery: CustomNodes.UserQueryNode,
  knowledgeBase: CustomNodes.KnowledgeBaseNode,
  llmEngine: CustomNodes.LLMEngineNode,
  output: CustomNodes.OutputNode,
};

function WorkflowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  useEffect(() => {
    const savedNodes = localStorage.getItem("workflow-nodes");
    const savedEdges = localStorage.getItem("workflow-edges");
    if (savedNodes && savedEdges) {
      setNodes(JSON.parse(savedNodes));
      setEdges(JSON.parse(savedEdges));
    }
  }, []);

  const saveWorkflow = () => {
    localStorage.setItem("workflow-nodes", JSON.stringify(nodes));
    localStorage.setItem("workflow-edges", JSON.stringify(edges));
    alert("✅ Workflow saved!");
  };

  const loadWorkflow = () => {
    const savedNodes = localStorage.getItem("workflow-nodes");
    const savedEdges = localStorage.getItem("workflow-edges");
    if (savedNodes && savedEdges) {
      setNodes(JSON.parse(savedNodes));
      setEdges(JSON.parse(savedEdges));
      alert("✅ Workflow loaded!");
    } else {
      alert("⚠️ No saved workflow found.");
    }
  };

  return (
    <div className="w-full flex justify-center relative">
      <div className="absolute top-4 right-4 space-x-2 z-10">
        <button
          onClick={saveWorkflow}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
        >
          💾 Save
        </button>
        <button
          onClick={loadWorkflow}
          className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
        >
          🔄 Load
        </button>
      </div>

      <div className="flex h-[60vh] w-full max-w-6xl border rounded shadow bg-white overflow-hidden">
        <Sidebar setNodes={setNodes} />
        <ReactFlowProvider>
          <div className="flex-1 h-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              fitView
            >
              <Background />
              <MiniMap />
              <Controls />
            </ReactFlow>
          </div>
        </ReactFlowProvider>
      </div>
    </div>
  );
}

export default WorkflowBuilder;