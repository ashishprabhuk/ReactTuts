import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import {
  Modal,
  Button,
  Row,
  Col,
  Container,
  ButtonGroup,
} from "react-bootstrap";

const Calendar = () => {
  const lArr = "<";
  const rArr = ">";
  const [events, setEvents] = useState([]);

  const handleDate = (selected) => {
    const title = prompt("Enter Title: ");
    const calenderApi = selected.view.calendar;
    calenderApi.unselect();

    if (title) {
      calenderApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
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
      {/* <Container className="m-3 justify-content-center align-content-center">
        <Row className="justify-content-center align-content-center">
          <Col>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">{lArr}</Button>
              <Button variant="secondary">{rArr}</Button>
            </ButtonGroup>
          </Col>
          <Col xs={6}>
            <h1>February</h1>
          </Col>
          <Col>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">Month</Button>
              <Button variant="secondary">Week</Button>
              <Button variant="secondary">Day</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container> */}
      {/* <Container>
        Container
      </Container> */}
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
    </>
  );
};

export default Calendar;
