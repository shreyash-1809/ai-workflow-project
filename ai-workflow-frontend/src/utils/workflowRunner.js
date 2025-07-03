import axios from "axios";

export const runWorkflowFromNodes = async () => {
  const query = prompt("Enter your user query:");
  if (!query) return alert("No query entered.");

  try {
    const res = await axios.post("http://localhost:8000/chat", { query });
    alert("Response:\n" + res.data.response);
  } catch (error) {
    console.error("Workflow run failed:", error);
    alert("Error running workflow.");
  }
};
