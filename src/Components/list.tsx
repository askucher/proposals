import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface Proposal {
  title: string;
  id: string;
  author: string;
  daysLeft: number;
}

const ProposalCard: React.FC<Proposal> = ({ title, id, author, daysLeft }) => (
  <div className="border-bottom pb-3 mb-3">
    <h5 className="mb-1">{title}</h5>
    <p className="mb-0 text-muted">
      #{id} by {author} • {daysLeft} days left
    </p>
  </div>
);

const Header: React.FC = () => (
  <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
    <div>
      <h1 className="h4">Arbitrum DAO</h1>
      <p className="mb-0 text-muted">349 proposals • 5.5m votes • 317k followers</p>
      <p className="mb-0 text-muted">The official snapshot space for the Arbitrum DAO</p>
    </div>
    <div className="d-flex align-items-center">
      <a href="/new" className="btn btn-outline-secondary me-2">
        New Proposal
      </a>
      <ConnectButton showBalance={false} />
    </div>
  </div>
);

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
      <Header />

      {/* Proposals */}
      <div className="mt-4">
        {proposals.map((proposal) => (
          <ProposalCard
            key={proposal.id}
            title={proposal.title}
            id={proposal.id}
            author={proposal.author}
            daysLeft={proposal.daysLeft}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
