import axios from "axios";

const API_KEY = "6b342ad56feaf9bc48846e8ecf29d5db";
const BASE_URL = "https://api.themoviedb.org/3/";

const fetchTrending = () => {
  return axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
};

const fetchSearch = (query) => {
  return axios.get(
    `${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
};

const fetchMovieDetails = (movieId) => {
  return axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
};

const fetchMovieCast = (movie_id) => {
  return axios.get(
    `${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
};

const fetchMovieReview = (movie_id) => {
  return axios.get(
    `${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export {
  fetchSearch,
  fetchTrending,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReview,
};
