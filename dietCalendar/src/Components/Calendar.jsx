import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import {
  Modal,
  Form,
  Button,
  Row,
  Col,
  Container,
  FloatingLabel,
} from "react-bootstrap";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [title, setTitle] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const handleDate = (selected) => {
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    setSelectedEvent(selected);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedEvent(null);
    setTitle("");
  };

  const handleModalSubmit = () => {
    if (selectedEvent) {
      const calendarApi = selectedEvent.view.calendar;
      calendarApi.addEvent({
        id: `${selectedEvent.dateStr}-${title}`,
        title,
        start: selectedEvent.startStr,
        end: selectedEvent.endStr,
        allDay: selectedEvent.allDay,
      });

      setShowModal(false);
    }
  };

  const handleEvent = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <>
      <Container className="calender-box">
        <FullCalendar
          height="75vh"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDate}
          eventClick={handleEvent}
          eventsSet={(events) => setEvents(events)}
          initialEvents={[
            {
              id: "12315",
              title: "All-day event",
              date: "2022-09-14",
            },
            {
              id: "5123",
              title: "Timed event",
              date: "2022-09-28",
            },
          ]}
        />
      </Container>

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
            <Form.Select aria-label="Default select example">
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
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="3"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="4"
                    name="group1"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                </div>
              ))}
            </Form>

            <Form className='snacks'>
              <Form.Check // prettier-ignore
                type="checkbox"
                id="checkbox"
                label="Snacks Intake: "
                onChange={handleCheckboxChange}
              />
              {["radio"].map((type) => (
                <div key={`inline-${type}`}>
                  <Form.Check
                    inline
                    disabled={!isCheckboxChecked}
                    label="1"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    disabled={!isCheckboxChecked}
                    label="2"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>
          </Container>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              as="textarea"
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

export default Calendar;
