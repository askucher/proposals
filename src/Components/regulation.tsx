import React from "react";

interface RegulationCardProps {
  logo: string; // Path to the logo image
  name: string; // Name of the regulation
  description: string; // Short description of the regulation
  fullDescription?: string; // Full description of the regulation (for extended mode)
  methodArguments?: string; // Method arguments (for extended mode)
  txId?: string; // Transaction ID (for extended mode)
  mode?: "small" | "extended"; // Mode of the component
}

const RegulationCard: React.FC<RegulationCardProps> = ({
  logo,
  name,
  description,
  fullDescription = "",
  methodArguments = "",
  txId = "",
  mode = "small",
}) => {
  return (
    <div
      className={`d-flex flex-column border rounded p-3 ${mode === "extended" ? "w-100" : ""}`}
      style={{
        maxWidth: mode === "extended" ? "100%" : "400px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        margin: mode === "extended" ? "0 auto" : "",
      }}
    >
      <div className="d-flex align-items-center">
        <div
          className="d-flex justify-content-center align-items-center bg-primary text-white rounded me-3"
          style={{ width: "50px", height: "50px" }}
        >
          <img src={logo} alt="Regulation Logo" style={{ width: "30px", height: "30px" }} />
        </div>
        <div>
          <h6 className="mb-1" style={{ fontWeight: "bold" }}>{name}</h6>
          <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>{description}</p>
        </div>
      </div>

      {mode === "extended" && (
        <div className="mt-3">
          {fullDescription && (
            <p className="mb-2" style={{ fontSize: "0.9rem" }}><strong>Full Description:</strong> {fullDescription}</p>
          )}
          {methodArguments && (
            <p className="mb-2" style={{ fontSize: "0.9rem" }}><strong>Method Arguments:</strong> {methodArguments}</p>
          )}
          {txId && (
            <p className="mb-2" style={{ fontSize: "0.9rem" }}><strong>Transaction ID:</strong> {txId}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RegulationCard;
