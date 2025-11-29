import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <nav
        style={{
          padding: "15px",
          background: "#20232a",
          color: "white",
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/" style={{ color: "white" }}>Search</Link>
        <Link to="/saved" style={{ color: "white" }}>Saved Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
  );
}

export default App;