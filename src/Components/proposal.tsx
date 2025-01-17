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
  timeline: {
    created: string;
    start: string;
    end: string;
  };
}

const ArbitrumDAO: React.FC = () => {
  const proposal: Proposal = {
    title: "Arbitrum D.A.O. Season 3 Elections - Gaming",
    status: "Pending",
    author: "Max Lomu",
    authorAvatar: "https://via.placeholder.com/40", // Replace with actual avatar URL
    category: "In Arbitrum DAO",
    timePosted: "18h ago",
    description: `
On December 12, 2024, the Arbitrum D.A.O. Grant Program, Season 3, was **favorably voted**, marking the Arbitrum DAO’s decision to extend the grant program for a third iteration.

This season will feature:
- A year-long program.
- The addition of a fifth experimental domain ("Orbit") alongside four established domains.

For details, visit the [forum discussion](https://forum.arbitrum.foundation/t/election-application-thread-arbitrum-dao-domain-allocator-offerings-grant-program/27909).

We encourage all Arbitrum Delegates to vote responsibly and in the best interests of the Arbitrum DAO.`,
    voteOptions: ["Flook", "Erezedor", "Abstain"],
    timeline: {
      created: "Jan 15, 2025 • 3:59 PM",
      start: "Jan 16, 2025 • 5:00 PM",
      end: "Jan 23, 2025 • 5:00 PM",
    },
  };

  const renderMarkdown = (text: string) => {
    return { __html: text };
  };

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
        <h1 className="h4">Arbitrum DAO</h1>
        <button className="btn btn-outline-secondary">Log In</button>
      </div>

      {/* Main Content */}
      <div className="row mt-4">
        {/* Proposal Description */}
        <div className="col-md-8">
          <h2>{proposal.title}</h2>
          <span className="badge bg-secondary">{proposal.status}</span>
          <div className="d-flex align-items-center my-3">
            <img
              src={proposal.authorAvatar}
              alt="Author"
              className="rounded-circle me-2"
              width="40"
              height="40"
            />
            <div>
              <p className="mb-0">{proposal.author}</p>
              <p className="text-muted mb-0">
                In {proposal.category} • {proposal.timePosted}
              </p>
            </div>
          </div>
          {/* Markdown Description */}
          <div dangerouslySetInnerHTML={renderMarkdown(proposal.description)} />
        </div>

        {/* Right Panel */}
        <div className="col-md-4">
          <div className="border p-3 rounded">
            <h5>Cast Your Vote</h5>
            <p className="text-muted">Voting for this proposal hasn&apos;t started yet.</p>
            <ul className="list-group mb-3">
              {proposal.voteOptions.map((option) => (
                <li
                  key={option}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {option}
                  <span className="badge bg-light text-dark">🔒</span>
                </li>
              ))}
            </ul>
            <div>
              <h6>Timeline</h6>
              <ul className="list-unstyled">
                <li>
                  <strong>Created:</strong> {proposal.timeline.created}
                </li>
                <li>
                  <strong>Start:</strong> {proposal.timeline.start}
                </li>
                <li>
                  <strong>End:</strong> {proposal.timeline.end}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArbitrumDAO;
