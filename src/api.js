import axios from 'axios';

const API_KEY = '1cf50e6248dc270629e802686245c2c8';

export const fetchMovies = async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=it-IT`);
  return response.data.results;
};