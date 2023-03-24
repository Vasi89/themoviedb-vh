import React, { useState } from 'react';
import { Table, Card, Button, Modal, Form } from 'react-bootstrap';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieTable = ({ movies, handleMovieClick, }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState({
    title: '',
    release_date: '',
  });

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedMovie(null);
    setEditedMovie({
      title: '',
      release_date: '',
    });
  };

  const handleShowEditModal = (movie) => {
    setSelectedMovie(movie);
    setEditedMovie({
      title: movie.title,
      release_date: movie.release_date,
    });
    setShowEditModal(true);
  };

  const handleEditMovie = () => {
    const updatedMovie = { ...selectedMovie, ...editedMovie };
    // aggiornare il film nella lista di film qui

    handleCloseEditModal();
  };

  const handleDeleteMovie = (movieId) => {
    // eliminare il film dalla lista di film qui
  };

  const calculateEndDate = (startDate) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + Math.floor(Math.random() * 21) + 7);
    return date.toLocaleDateString();
  };

  const getRandomRoomNumber = () => {
    return Math.floor(Math.random() * 12) + 1;
  };

  const handleDeleteClick = (e) => {
    const movieId = $(e.target).data('movieid');
    handleDeleteMovie(movieId);
  };

  const handleEditClick = (e) => {
    const movieId = $(e.target).data('movieid');
    const movie = movies.find((movie) => movie.id === movieId);
    handleShowEditModal(movie);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditMovie();
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Titolo</th>
            <th>Data di inizio</th>
            <th>Data di fine</th>
            <th>Numero di sala</th>
            <th>Mi piace Ricevuti</th>
            <th>Popolarità</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id} onClick={() => handleMovieClick(movie)}>
              <td><img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} width={70}></img></td>
              <td>{movie.title}</td>
              <td>{movie.release_date}</td>
              <td>{calculateEndDate(movie.release_date)}</td>
              <td>{getRandomRoomNumber()}</td>
              <td>{movie.vote_count}</td>
              <td>{movie.vote_average}</td>
              <td>
                <Button
                  variant="primary"
                  className="mr-2"
                  data-movieid={movie.id}
                  onClick={handleEditClick}
                >
                  Modifica
                </Button>
                <Button
                  variant="danger"
                  data-movieid={movie.id}
                  onClick={handleDeleteClick}
                >
                  Elimina
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal className='modal' show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title className='modal-title'>Modifica film</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body className='modal-body'>
            <Form.Group controlId="formMovieTitle">
              <Form.Label>Titolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il titolo del film"
                value={editedMovie.title}
                onChange={(e) =>
                  setEditedMovie({ ...editedMovie, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formReleaseDate">
              <Form.Label>Data di uscita</Form.Label>
              <Form.Control
                type="date"
                value={editedMovie.release_date}
                onChange={(e) =>
                  setEditedMovie({
                    ...editedMovie,
                    release_date: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEditModal}>
              Annulla
            </Button>
            <Button variant="primary" type="submit">
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default MovieTable;
