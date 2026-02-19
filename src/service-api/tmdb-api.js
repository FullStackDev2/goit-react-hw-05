import axios from "axios";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGZmMmQ2MjY3Y2VlYThlMDM5NDIyYjBmNDZmYjgxMyIsIm5iZiI6MTc2NjY4OTg1Ny41MDg5OTk4LCJzdWIiOiI2OTRkOGM0MTA3NjRkZGRhNjU4ZWFlZDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TLoOodPsncBr6pWr45CG19-HD-tHjGXyGFumTmXP9Vg";
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchTrending = async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return res.data.results;
};

export const searchMovies = async query => {
  const res = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&include_adult=false`,
    options
  );
  return res.data.results;
};

export const fetchMovieDetails = async movieId => {
  const res = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
  return res.data;
};

export const fetchMovieCast = async movieId => {
  const res = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
  return res.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const res = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
  return res.data.results;
};
