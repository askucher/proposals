import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface Proposal {
  title: string;
  id: string;
  author: string;
  daysLeft: number;
}

const ProposalCard: React.FC<Proposal> = ({ title, id, author, daysLeft }) => (
  <div className="border-bottom pb-3 mb-3">
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h5 className="mb-1">{title}</h5>
        <p className="mb-0 text-muted">
          #{id} by {author} • {daysLeft} days left
        </p>
      </div>
      <a href={`/proposal/${id}`} className="btn btn-primary">
        View Proposal
      </a>
    </div>
  </div>
);


const Header: React.FC = () => (
  <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
    <div>
      <h1 className="h4">Peace DAO Proposals</h1>
      <p className="mb-0 text-muted">421 proposals • 6.8m votes • 412k followers</p>
      <p className="mb-0 text-muted">The official snapshot space for Hideway DEX Governance</p>
    </div>
    <div className="d-flex align-items-center">
      <a href="/regulations" className="btn btn-outline-secondary me-2">
        Regulations
      </a>
      <a href="/new" className="btn btn-outline-secondary me-2">
        New Proposal
      </a>
      <ConnectButton showBalance={false} />
    </div>
  </div>
);

const List: React.FC = () => {
  const proposals: Proposal[] = [
    { title: "Add Token X to Hideway DEX", id: "tx001", author: "Alice", daysLeft: 5 },
    { title: "Implement Telecom Data Regulations on WMC Chain", id: "tx002", author: "Bob", daysLeft: 8 },
    { title: "Upgrade Governance Mechanism for Blockchain Data Security", id: "tx003", author: "Charlie", daysLeft: 10 },
    { title: "Introduce Decentralized Oracles for Telecom Data Validation", id: "tx004", author: "Dana", daysLeft: 7 },
    { title: "Proposal to Deploy Cross-Chain Data Sharing Protocol", id: "tx005", author: "Eve", daysLeft: 12 },
    // Add more proposals here as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(proposals.length / itemsPerPage);
  const displayedProposals = proposals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mt-4">
      {/* Header */}
      <Header />

      {/* Proposals */}
      <div className="mt-4">
        {displayedProposals.map((proposal) => (
          <ProposalCard
            key={proposal.id}
            title={proposal.title}
            id={proposal.id}
            author={proposal.author}
            daysLeft={proposal.daysLeft}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <button
          className="btn btn-outline-secondary"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-outline-secondary"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default List;
