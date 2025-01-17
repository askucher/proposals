import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface Proposal {
  title: string;
  id: string;
  author: string;
  daysLeft: number;
}

const List: React.FC = () => {
  const proposals: Proposal[] = [
    { title: "Arbitrum D.A.O. Season 3 Elections - Gaming", id: "e52ab", author: "Max Lomu", daysLeft: 7 },
    { title: "Arbitrum D.A.O. Season 3 Elections - Dev Tooling on One and Stylus", id: "72418", author: "Max Lomu", daysLeft: 7 },
    { title: "Arbitrum D.A.O. Season 3 Elections - Education, Community Growth, and Events", id: "0ce49", author: "Max Lomu", daysLeft: 7 },
    { title: "Arbitrum D.A.O. Season 3 Elections - New Protocols and Ideas", id: "3defa", author: "Max Lomu", daysLeft: 7 },
    { title: "Non-Constitutional: Stable Treasury Endowment Program 2.0", id: "cbf1e", author: "L2BEAT", daysLeft: 14 },
  ];

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
        <div>
          <h1 className="h4">Arbitrum DAO</h1>
          <p className="mb-0 text-muted">349 proposals • 5.5m votes • 317k followers</p>
          <p className="mb-0 text-muted">The official snapshot space for the Arbitrum DAO</p>
        </div>
        <div>
        <a href="/new" className="btn btn-outline-secondary me-2">New Proposal</a>
        <ConnectButton showBalance={false} />
        </div>
      </div>

      {/* Proposals */}
      <div className="mt-4">
        {proposals.map((proposal, index) => (
          <div key={index} className="border-bottom pb-3 mb-3">
            <h5 className="mb-1">{proposal.title}</h5>
            <p className="mb-0 text-muted">
              #{proposal.id} by {proposal.author} • {proposal.daysLeft} days left
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
