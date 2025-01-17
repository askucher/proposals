import React from "react";


interface RegulationCardProps {
  logo: string; // Path to the logo image
  name: string; // Name of the regulation
  description: string; // Short description of the regulation
}

const RegulationCard: React.FC<RegulationCardProps> = ({ logo, name, description }) => {
  return (
    <div className="d-flex align-items-center border rounded p-3" style={{ maxWidth: "300px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <div
        className="d-flex justify-content-center align-items-center bg-primary text-white rounded me-3"
        style={{ width: "50px", height: "50px" }}
      >
        <img
          src={logo}
          alt="Regulation Logo"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
      <div>
        <h6 className="mb-1" style={{ fontWeight: "bold" }}>{name}</h6>
        <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>{description}</p>
      </div>
    </div>
  );
};

export default RegulationCard;
