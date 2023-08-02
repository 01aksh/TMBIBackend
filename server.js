// server.js
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// API endpoint to redirect to TMBI
app.get("/trending/movie/week", async (req, res) => {
  try {
    const apiKey = "d3ad4f3cda99821ff4976c32451a376c";
    const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

    const response = await axios.get(apiUrl);
    const movies = response.data;

    res.json(movies);
  } catch (error) {
    console.error("Error fetching data from TMBI API:", error.message);
    res.status(500).json({ error: "Error fetching data from TMBI API" });
  }
});
app.get("/search/movie", async (req, res) => {
  try {
    const { query } = req.query;
    const apiKey = "d3ad4f3cda99821ff4976c32451a376c";
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    const response = await axios.get(apiUrl);
    const movies = response.data;

    res.json(movies);
  } catch (error) {
    console.error("Error fetching data from TMBI API:", error.message);
    res.status(500).json({ error: "Error fetching data from TMBI API" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
