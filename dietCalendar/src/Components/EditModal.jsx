import React, { useEffect } from "react";
import { Modal, Form, Button, Container, FloatingLabel } from "react-bootstrap";

const EditModal = ({
  events,
  editTitle,
  setEditTitle,
  editDiet,
  setEditDiet,
  //   handleMeals,
  //   handleSnacks,
  editMeals,
  setEditMeals,
  editSnacks,
  setEditSnacks,
  editDesc,
  setEditDesc,
  editModal,
  isEditCheck,
  setEditCheck,
  selectedEvent,
  setSelectedEvent,
  handleEventUpdate,
  handleModalClose,
  handleEvent,
  handleDelete,
}) => {
    // const event = events.find((event) => selectedEvent.id === event.id);

    // useEffect(() => {
    //   if (events && events.length > 0) {
    //     const foundEvent = events.find((event) => selectedEvent.id === event.id);
    //     if (foundEvent) {
    //       setEditTitle(foundEvent.title);
    //       setEditDiet(foundEvent.diet);
    //       setEditDesc(foundEvent.desc);
    //     }
    //   }
    // }, [events, selectedEvent, setEditTitle, setEditDiet, setEditDesc]);

  const handleToggle = (value, setter) => {
    setter((prevValues) =>
      prevValues.includes(value)
        ? prevValues.filter((item) => item !== value)
        : [...prevValues, value]
    );
  };

  const handleMeals = (value) => handleToggle(value, setEditMeals);
  const handleSnacks = (value) => handleToggle(value, setEditSnacks);

  return (
    <>
      <Modal show={editModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Diet Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <FloatingLabel label="Plan Title">
            <Form.Control
              type="text"
              label="Title"
              placeholder="Plan Title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingSelect" label="Diet Type">
            <Form.Select
              aria-label="Default select example"
              value={editDiet}
              onChange={(e) => setEditDiet(e.target.value)}
            >
              <option>Select the Diet Type</option>
              <option value="1">5:2 Diet</option>
              <option value="2">Classic Bodybuilding</option>
              <option value="3">Flexible Dieting</option>
              <option value="4">Ketogenic Diet</option>
              <option value="5">Low Carb</option>
              <option value="6">Low Fat</option>
              <option value="7">Zone Diet</option>
            </Form.Select>
          </FloatingLabel>
          <Container className="radio-box">
            <Form>
              {["radio"].map((type) => (
                <div key={`inline-${type}`}>
                  <Form.Label className="form-label">No. of Meals: </Form.Label>
                  <Form.Check
                    inline
                    label="2"
                    name="group1"
                    type={type}
                    onChange={() => handleMeals("2")}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="3"
                    name="group1"
                    type={type}
                    onChange={() => handleMeals("3")}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="4"
                    name="group1"
                    type={type}
                    onChange={() => handleMeals("4")}
                    id={`inline-${type}-4`}
                  />
                </div>
              ))}
            </Form>

            <Form className="snacks">
              <Form.Check // prettier-ignore
                type="checkbox"
                id="checkbox"
                label="Snacks Intake: "
                onChange={(e) => setEditCheck(e.target.checked)}
              />
              {["radio"].map((type) => (
                <div key={`inline-${type}`}>
                  <Form.Check
                    inline
                    disabled={!isEditCheck}
                    label="1"
                    name="group1"
                    type={type}
                    onChange={() => handleSnacks("1")}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    disabled={!isEditCheck}
                    label="2"
                    name="group1"
                    type={type}
                    onChange={() => handleSnacks("2")}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>
          </Container>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEventUpdate}>
            Update
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
