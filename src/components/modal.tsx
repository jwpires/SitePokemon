import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/style.css'

const MyModal: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Abrir Modal
      </Button>

      <Modal show={show} onHide={handleClose} className='modal-container'>
        <Modal.Header closeButton>
          <Modal.Title>Título do Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-dialog'>
          Conteúdo do Modal
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;