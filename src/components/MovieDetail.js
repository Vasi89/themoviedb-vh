import React from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

const MovieDetail = ({ selectedMovie, showModal, handleClose }) => {
  if (!selectedMovie) {
    return null;
  }

  const calculateEndDate = (startDate) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + Math.floor(Math.random() * 21) + 7);
    return date.toLocaleDateString();
  };

  const getRandomRoomNumber = () => {
    return Math.floor(Math.random() * 12) + 1;
  };

  return (
    <Modal className='bg-dark bg-transparent' show={showModal} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{selectedMovie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className='rounded container'>
          <div className="row bg-secondary rounded-1">
            <div className="card col-md-4 bg-secondary border-0">
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`} />
            </div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title>{selectedMovie.title}</Card.Title>
                <Card.Text>{selectedMovie.overview}</Card.Text>
                <div className="row">
                  <div className="col-sm-6">
                    <Card.Text><strong>Data di uscita:</strong> {selectedMovie.release_date}</Card.Text>
                  </div>
                  <div className="col-sm-6">
                    <Card.Text><strong>Programmazione:</strong> {selectedMovie.release_date} - {calculateEndDate(selectedMovie.release_date)}</Card.Text>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <Card.Text><strong>Sala:</strong> {getRandomRoomNumber()}</Card.Text>
                  </div>
                  <div className="col-sm-6">
                    <Button variant="primary">Prenota biglietto</Button>
                  </div>
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Chiudi</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieDetail;
