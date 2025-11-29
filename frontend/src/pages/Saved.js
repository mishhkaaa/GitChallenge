import React, { useEffect, useState } from "react";
import { api } from "../api/api";

function Saved() {
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    const res = await api.get("/movies");
    setMovies(res.data);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Saved Movies</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div
            key={movie._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={movie.posterUrl}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <p>{movie.genre}</p>
            <p>⭐ {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Saved;