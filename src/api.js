const API_KEY = '1cf50e6248dc270629e802686245c2c8';

export const fetchMovies = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=it-IT`);
  const data = await response.json();
  return data.results;
};

export const deleteMovie = async (movieId) => {
  // ... implementation of deleteMovie
};

export const updateMovie = async (updatedMovie) => {
  // ... implementation of updateMovie
};





