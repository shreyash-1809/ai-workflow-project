import React from "react";

const baseStyle = {
  border: "2px solid #444",
  padding: 10,
  borderRadius: 8,
  backgroundColor: "white",
  width: 180,
};

export const UserQueryNode = ({ data }) => (
  <div style={baseStyle}>
    <strong>User Query</strong>
    <input className="border w-full mt-2 p-1" placeholder="Ask..." />
  </div>
);

export const KnowledgeBaseNode = ({ data }) => (
  <div style={baseStyle}>
    <strong>Knowledge Base</strong>
    <input type="file" className="mt-2" />
  </div>
);

export const LLMEngineNode = ({ data }) => (
  <div style={baseStyle}>
    <strong>LLM Engine</strong>
    <p className="text-sm mt-1">GPT / Gemini</p>
  </div>
);

export const OutputNode = ({ data }) => (
  <div style={baseStyle}>
    <strong>Output</strong>
    <p className="text-sm mt-1">Final response shown here</p>
  </div>
);

export default {
  UserQueryNode,
  KnowledgeBaseNode,
  LLMEngineNode,
  OutputNode,
};
