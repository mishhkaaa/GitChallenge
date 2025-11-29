import React from "react";

function MovieCard({ movie, onSave }) {
  if (!movie) return null;

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        width: "300px",
      }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Rating: {movie.imdbRating}</p>
      <p>Genre: {movie.Genre}</p>

      {onSave && (
        <button
          onClick={onSave}
          style={{
            marginTop: "10px",
            padding: "10px 15px",
            borderRadius: "8px",
            background: "#28a745",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Save Movie
        </button>
      )}
    </div>
  );
}

export default MovieCard;