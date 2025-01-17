import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./Components/list";
import NewProposal from "./Components/newProposal";
import Proposal from "./Components/proposal";
import Regulations from "./Components/regulations";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default location: / */}
        <Route path="/" element={<List />} />

        {/* Location: /new */}
        <Route path="/new" element={<NewProposal />} />

        {/* Location: /proposal/:id */}
        <Route path="/proposal/:id" element={<Proposal />} />

        {/* Location: /regulations */}
        <Route path="/regulations" element={<Regulations />} />
      </Routes>
    </Router>
  );
}

export default App;
