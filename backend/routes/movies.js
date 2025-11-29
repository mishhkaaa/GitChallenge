const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// ✅ POST: Save a movie
router.post("/", async (req, res) => {
  try {
    const { title, year, posterUrl, rating, genre } = req.body;

    if (!title || !year || !posterUrl || !rating || !genre) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const movie = new Movie({
      title,
      year,
      posterUrl,
      rating,
      genre,
    });

    await movie.save();

    res.status(201).json({
      success: true,
      message: "Movie saved successfully",
      movie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

// ✅ GET: Fetch all saved movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

module.exports = router;
