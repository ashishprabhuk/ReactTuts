import React from "react";
import { Modal, Form, Button, Container, FloatingLabel } from "react-bootstrap";

const CreateModal = ({
  title,
  setTitle,
  diet,
  setDiet,
  handleMeals,
  handleSnacks,
  desc,
  setDesc,
  showModal,
  isCheckboxChecked,
  setIsCheckboxChecked,
  handleModalSubmit,
  handleModalClose,
}) => {
  return (
    <>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Diet Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <FloatingLabel label="Plan Title">
            <Form.Control
              type="text"
              label="Title"
              placeholder="Plan Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingSelect" label="Diet Type">
            <Form.Select
              aria-label="Default select example"
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
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
                onChange={(e) => setIsCheckboxChecked(e.target.checked)}
              />
              {["radio"].map((type) => (
                <div key={`inline-${type}`}>
                  <Form.Check
                    inline
                    disabled={!isCheckboxChecked}
                    label="1"
                    name="group1"
                    type={type}
                    onChange={() => handleSnacks("1")}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    disabled={!isCheckboxChecked}
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
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateModal;
