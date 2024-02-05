import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({ show, handleClose, handleDeleteConfirmation }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirmation}>
            Yes, Delete!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
