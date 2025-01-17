import React, { useState } from "react";
import { marked } from "marked";

interface Execution {
  title: string;
  date: string;
  type: string;
}

interface Proposal {
  title: string;
  description: string;
  discussionLink: string;
  execution: Execution;
}

const NewProposal: React.FC = () => {
  const [proposal, setProposal] = useState<Proposal>({
    title: "",
    description: "",
    discussionLink: "",
    execution: {
      title: "LTIP (19/3/2024)",
      date: "19/3/2024",
      type: "oSnap execution",
    },
  });
  const [editorMode, setEditorMode] = useState<"write" | "preview">("write");

  const renderMarkdown = (text: string) => {
    return marked(text);
  };

  const handleGoBack = () => {
    alert("Go back to the previous page."); // Replace with actual back navigation logic
  };

  const handleInputChange = (field: keyof Proposal, value: string) => {
    setProposal((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mt-4">
      {/* Back Button */}
      <div className="mb-3">
        <button className="btn btn-outline-secondary" onClick={handleGoBack}>
          ← New Proposal
        </button>
      </div>

      {/* Proposal Form */}
      <div className="mb-4">
        {/* Title */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Title"
          value={proposal.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
        />

        {/* Markdown Editor */}
        <div className="mb-3">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${editorMode === "write" ? "active" : ""}`}
                onClick={() => setEditorMode("write")}
              >
                Write
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${editorMode === "preview" ? "active" : ""}`}
                onClick={() => setEditorMode("preview")}
              >
                Preview
              </button>
            </li>
          </ul>
          {editorMode === "write" ? (
            <textarea
              className="form-control mt-2"
              rows={6}
              placeholder="Description"
              value={proposal.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            ></textarea>
          ) : (
            <div
              className="border p-3 bg-light mt-2"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(proposal.description) }}
            ></div>
          )}
        </div>

        {/* Discussion Link */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Discussion (e.g. https://forum.example.com/proposal...)"
          value={proposal.discussionLink}
          onChange={(e) => handleInputChange("discussionLink", e.target.value)}
        />

        {/* Execution Section */}
        <div>
          <h6 className="mb-3">Execution</h6>
          <div className="d-flex align-items-center border p-3 rounded mb-3">
            <img
              src="https://via.placeholder.com/40"
              alt="Execution Icon"
              className="me-3 rounded"
            />
            <div>
              <p className="mb-0">
                <strong>{proposal.execution.title}</strong>
              </p>
              <p className="mb-0 text-muted">
                {proposal.execution.date} • {proposal.execution.type}
              </p>
            </div>
          </div>

          {/* Execution Actions */}
          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-secondary me-2">
              <i className="bi bi-camera"></i>
            </button>
            <button className="btn btn-outline-secondary me-2">
              <i className="bi bi-image"></i>
            </button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-code-slash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProposal;
