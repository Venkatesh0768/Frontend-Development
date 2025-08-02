import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzFhYWRiNDk4YmQwOTg4MzQzYTgzNmI1NWViMmRhMyIsIm5iZiI6MTc1NDEwODA2Ny40MjMsInN1YiI6IjY4OGQ5MGEzMzVlNjkxYjNkYjYxZTc1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xZgmRKLByr-G0CvzqZRYowHCc-K9LQMtx8rSngc0i2c",
  },
});

export default instance;
