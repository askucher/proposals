import React, { useState } from "react";
import { marked } from "marked";
import { ConnectButton } from "@rainbow-me/rainbowkit";

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
  selectedRegulation: string;
  arguments: Record<string, string>;
}

const regulations = [
  {
    name: "Hideway Listing",
    method: "listToken",
    arguments: ["address", "logo", "name", "symbol"],
  },
  {
    name: "Example Regulation",
    method: "exampleMethod",
    arguments: ["arg1", "arg2", "arg3"],
  },
];

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
    selectedRegulation: "",
    arguments: {},
  });

  const [editorMode, setEditorMode] = useState<"write" | "preview">("write");

  const renderMarkdown = (text: string) => {
    return marked(text);
  };

  const handleInputChange = (field: keyof Proposal, value: string) => {
    setProposal((prev) => ({ ...prev, [field]: value }));
  };

  const handleArgumentChange = (arg: string, value: string) => {
    setProposal((prev) => ({
      ...prev,
      arguments: { ...prev.arguments, [arg]: value },
    }));
  };

  const handleRegulationChange = (regulationName: string) => {
    const regulation = regulations.find((r) => r.name === regulationName);
    setProposal({
      ...proposal,
      selectedRegulation: regulationName,
      arguments: regulation
        ? Object.fromEntries(regulation.arguments.map((arg) => [arg, ""]))
        : {},
    });
  };

  return (
    <div className="container mt-4">
      {/* Back Button */}
       <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
       <a className="btn btn-outline-secondary" href="/">
          ← New Proposal
        </a>
              <ConnectButton />
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
          placeholder="More Information (e.g. https://forum.example.com/proposal...)"
          value={proposal.discussionLink}
          onChange={(e) => handleInputChange("discussionLink", e.target.value)}
        />

        {/* Regulation Dropdown */}
        <select
          className="form-select mb-3"
          value={proposal.selectedRegulation}
          onChange={(e) => handleRegulationChange(e.target.value)}
        >
          <option value="">Select Regulation</option>
          {regulations.map((reg) => (
            <option key={reg.name} value={reg.name}>
              {reg.name} - {reg.method}({reg.arguments.join(", ")})
            </option>
          ))}
        </select>

        {/* Arguments Form */}
        {proposal.selectedRegulation && (
          <div className="mb-3">
            <h5>Fill in Arguments:</h5>
            {Object.keys(proposal.arguments).map((arg) => (
              <div key={arg} className="mb-2">
                <label className="form-label">{arg}:</label>
                <input
                  type="text"
                  className="form-control"
                  value={proposal.arguments[arg]}
                  onChange={(e) => handleArgumentChange(arg, e.target.value)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewProposal;
