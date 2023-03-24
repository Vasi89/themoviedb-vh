import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, InputGroup, FormControl} from 'react-bootstrap';
import { fetchMovies } from './api';
import MovieDetail from './components/MovieDetail';
import MovieTable from './components/MovieTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
          const movies = await fetchMovies();
          setMovies(movies);
      };
      fetchData();
  }, []);

  const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleMovieClick = (movie) => {
      setSelectedMovie(movie);
      setShowModal(true);
  };

  const handleClose = () => {
      setSelectedMovie(null);
      setShowModal(false);
  };

  return (
      <Container>
        
          <h1 className="text-center justify-content-center">CineMille - Programmazione film</h1>
          <InputGroup className="mb-3">
              <FormControl className='rounded'
                  placeholder="Cerca film..."
                  aria-label="Cerca film"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
              />
          </InputGroup>
          <MovieDetail selectedMovie={selectedMovie} showModal={showModal} handleClose={handleClose} />
          <MovieTable movies={filteredMovies} handleMovieClick={handleMovieClick} />
      </Container>
  );
};

export default App;
