import React from "react";

function SearchBar({ movieName, setMovieName, onSearch }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        placeholder="Search a movie..."
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={onSearch}
        style={{
          marginLeft: "10px",
          padding: "10px 15px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;