import React, { useState, useMemo } from "react";
import RegulationCard from './regulation';

interface Regulation {
  protocolIcon: string;
  description: string;
  smartContractMethod: string;
  dateApplied: string;
  txLink: string;
  protocol: string;
}

const RegulationsTable: React.FC = () => {
  const [filters, setFilters] = useState({ protocol: "", method: "" });

  const regulations: Regulation[] = [
    {
      protocolIcon: "https://via.placeholder.com/30",
      description: "Regulation 1 description",
      smartContractMethod: "methodA(arg1, arg2)",
      dateApplied: "2025-01-01",
      txLink: "https://example.com/tx/1",
      protocol: "Protocol A",
    },
    {
      protocolIcon: "https://via.placeholder.com/30",
      description: "Regulation 2 description",
      smartContractMethod: "methodB(arg3, arg4)",
      dateApplied: "2025-01-02",
      txLink: "https://example.com/tx/2",
      protocol: "Protocol B",
    },
    // Add more rows as needed
  ];

  const uniqueProtocols = useMemo(() => {
    return Array.from(new Set(regulations.map((row) => row.protocol)));
  }, [regulations]);

  const uniqueMethods = useMemo(() => {
    return Array.from(new Set(regulations.map((row) => row.smartContractMethod)));
  }, [regulations]);

  const filteredData = useMemo(() => {
    return regulations.filter((row) => {
      const matchesProtocol = !filters.protocol || row.protocol === filters.protocol;
      const matchesMethod = !filters.method || row.smartContractMethod === filters.method;
      return matchesProtocol && matchesMethod;
    });
  }, [filters, regulations]);

  const handleFilterChange = (key: "protocol" | "method", value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
        <h1 className="h4">Regulations</h1>
        <a className="btn btn-outline-secondary" href="/">Back</a>
      </div>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-6">
          <label htmlFor="protocolFilter" className="form-label">Filter by Protocol</label>
          <select
            id="protocolFilter"
            className="form-select"
            value={filters.protocol}
            onChange={(e) => handleFilterChange("protocol", e.target.value)}
          >
            <option value="">All Protocols</option>
            {uniqueProtocols.map((protocol) => (
              <option key={protocol} value={protocol}>
                {protocol}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="methodFilter" className="form-label">Filter by Smart Contract Method</label>
          <select
            id="methodFilter"
            className="form-select"
            value={filters.method}
            onChange={(e) => handleFilterChange("method", e.target.value)}
          >
            <option value="">All Methods</option>
            {uniqueMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Cards */}
      <div className="row">
        {filteredData.map((row) => (
          <div className="col-md-6 mb-4" key={row.txLink}>
            <RegulationCard
              logo={row.protocolIcon}
              name={row.protocol}
              description={row.description}
              fullDescription={`Applied on: ${row.dateApplied}`}
              methodArguments={row.smartContractMethod}
              txId={row.txLink}
              mode="extended"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegulationsTable;
