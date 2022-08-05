import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;
const baseUrl = 'https://api.themoviedb.org/3';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3'; not working

export const getTrendingMovies = async page => {
  const response = await axios.get(`
    ${baseUrl}/trending/movie/week?api_key=${REACT_APP_API_KEY}&page=${page}`);

  return response.data.results;
};

export const getMovieBySearchQuery = async (query, page) => {
  const response = await axios.get(`
    ${baseUrl}/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);

  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`
    ${baseUrl}/movie/${movieId}?api_key=${REACT_APP_API_KEY}&language=en-US`);

  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(`
    ${baseUrl}/movie/${movieId}/credits?api_key=${REACT_APP_API_KEY}&language=en-US`);

  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`
    ${baseUrl}/movie/${movieId}/reviews?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`);

  return response.data.results;
};
