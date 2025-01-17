import React from "react";

interface Proposal {
  title: string;
  status: string;
  author: string;
  authorAvatar: string;
  category: string;
  timePosted: string;
  description: string;
  voteOptions: string[];
  votePercentages: {
    up: number;
    down: number;
    nonVoted: number;
  };
  timeline: {
    created: string;
    start: string;
    end: string;
  };
}

interface RightPanelProps {
  proposal: Proposal;
}

const RightPanel: React.FC<RightPanelProps> = ({ proposal }) => {
  const { votePercentages, timeline } = proposal;

  return (
    <div className="border p-3 rounded">
      {/* Voting Section */}
      <h5>Cast Your Vote</h5>
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span>Up</span>
          <span>{votePercentages.up}%</span>
        </div>
        <div className="progress mb-3">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${votePercentages.up}%` }}
            aria-valuenow={votePercentages.up}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span>Down</span>
          <span>{votePercentages.down}%</span>
        </div>
        <div className="progress mb-3">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: `${votePercentages.down}%` }}
            aria-valuenow={votePercentages.down}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span>Non Voted</span>
          <span>{votePercentages.nonVoted}%</span>
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-secondary"
            role="progressbar"
            style={{ width: `${votePercentages.nonVoted}%` }}
            aria-valuenow={votePercentages.nonVoted}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mt-4">
        <h6>Timeline</h6>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Created:</strong> {timeline.created}
          </li>
          <li className="list-group-item">
            <strong>Start:</strong> {timeline.start}
          </li>
          <li className="list-group-item">
            <strong>End:</strong> {timeline.end}
          </li>
        </ul>
      </div>

      {/* Connected Regulation Section */}
      <div className="mt-4">
        <h5>
          <span className="badge bg-info text-dark">Connected Regulation</span>
        </h5>
        <div className="d-flex align-items-center mt-3">
          <img
            src="/path-to-protocol-icon.png"
            alt="Protocol Icon"
            className="me-2"
            width="24"
            height="24"
          />
          <p className="mb-0">
            This proposal aligns with the latest protocols ensuring compliance and regulation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
