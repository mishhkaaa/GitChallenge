import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { api } from "../api/api";

function Home() {
  const [movieName, setMovieName] = useState("");
  const [movie, setMovie] = useState(null);

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  const searchMovie = async () => {
    if (!movieName) return;

    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movieName}`;
    const response = await axios.get(url);

    if (response.data && response.data.Response !== "False") {
      setMovie(response.data);
    } else {
      alert("Movie not found");
    }
  };

  const saveMovie = async () => {
    const payload = {
      title: movie.Title,
      year: movie.Year,
      posterUrl: movie.Poster,
      rating: movie.imdbRating,
      genre: movie.Genre,
    };

    const res = await api.post("/movies", payload);

    if (res.data.success) {
      alert("Movie saved successfully!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movie Explorer</h1>

      <SearchBar
        movieName={movieName}
        setMovieName={setMovieName}
        onSearch={searchMovie}
      />

      <MovieCard movie={movie} onSave={saveMovie} />
    </div>
  );
}

export default Home;