/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import CreateModal from "./CreateModal";
import CalendarBox from "./CalendarBox";
import { DataProvider } from "../context/DataContext.jsx";

const Calendar = () => {
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("diet")) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [title, setTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [diet, setDiet] = useState("");
  const [editDiet, setEditDiet] = useState("");
  const [desc, setDesc] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [meals, setMeals] = useState([]);
  const [editMeals, setEditMeals] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [editSnacks, setEditSnacks] = useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isEditCheck, setEditCheck] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDate = (selected) => {
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    setSelectedEvent(selected);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditModal(false);
    setSelectedEvent(null);
    setTitle("");
    setDiet("");
    setMeals([]);
    setSnacks([]);
    setIsCheckboxChecked(false);
    setDesc("");
  };

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("diet")) || [];
    setEvents(storedEvents);
  }, []);

  const handleEvent = (selected) => {
    setSelectedEvent(selected);
    setEditModal(true);
    setTitle(selected.event.title);
    setDiet(selected.event.diet);
    setDesc(selected.event.desc);
    setMeals(selected.event.meals);
    setSnacks(selected.event.snacks);
    setIsCheckboxChecked(selected.event.isCheckboxChecked);
  };

  const handleModalSubmit = () => {
    if (selectedEvent) {
      const calendarApi = selectedEvent.view.calendar;
      console.log(selectedEvent);
      const id = events.length
        ? (parseInt(events[events.length - 1].id, 10) + 1).toString()
        : "1";
      const newEvent = {
        id: id,
        title,
        diet,
        desc,
        meals,
        isCheckboxChecked,
        snacks,
        start: selectedEvent.startStr,
        end: selectedEvent.endStr,
        allDay: selectedEvent.allDay,
      };
      calendarApi.addEvent(newEvent);
      const allEvents = [...events, newEvent];
      setEvents(allEvents);
      console.log(allEvents[0].id);
      localStorage.setItem("diet", JSON.stringify(allEvents));
      setShowModal(false);
      setEditModal(false);
    }
  };

  //   const handleModalSubmit = () => {
  //   if (selectedEvent) {
  //     const calendarApi = selectedEvent.view.calendar;
  //     const isExistingEvent = events.some((event) => event.id === selectedEvent.id);
  //     const newEvent = {
  //       id: selectedEvent.id || uuidv4(),
  //       title,
  //       diet,
  //       desc,
  //       meals,
  //       isCheckboxChecked,
  //       snacks,
  //       start: selectedEvent.startStr,
  //       end: selectedEvent.endStr,
  //       allDay: selectedEvent.allDay,
  //     };
  //     calendarApi.addEvent(newEvent);
  //     if (isExistingEvent) {
  //       const updatedEvents = events.map((event) =>
  //         event.id === selectedEvent.id ? newEvent : event
  //       );
  //       setEvents(updatedEvents);
  //       localStorage.setItem("diet", JSON.stringify(updatedEvents));
  //     } else {
  //       const allEvents = [...events, newEvent];
  //       setEvents(allEvents);
  //       localStorage.setItem("diet", JSON.stringify(allEvents));
  //     }
  //     setShowModal(false);
  //     setEditModal(false);
  //   }
  // };

  // const handleEventUpdate = () => {
  //   if (selectedEvent) {
  //     const calendarApi = selectedEvent.view.calendar;
  //     const updatedEvent = {
  //       id: selectedEvent.id,
  //       title: editTitle,
  //       diet: editDiet,
  //       desc: editDesc,
  //       meals: editMeals,
  //       isCheckboxChecked: isEditCheck,
  //       snacks: editSnacks,
  //       start: selectedEvent.startStr,
  //       end: selectedEvent.endStr,
  //       allDay: selectedEvent.allDay,
  //     };
  //     selectedEvent.event.setProp("title", updatedEvent.title);
  //     selectedEvent.event.setProp("diet", updatedEvent.diet);
  //     selectedEvent.event.setProp("desc", updatedEvent.desc);
  //     selectedEvent.event.setProp("meals", updatedEvent.meals);
  //     selectedEvent.event.setProp(
  //       "isCheckboxChecked",
  //       updatedEvent.isCheckboxChecked
  //     );
  //     selectedEvent.event.setProp("snacks", updatedEvent.snacks);
  //     selectedEvent.event.setStart(updatedEvent.start);
  //     selectedEvent.event.setEnd(updatedEvent.end);
  //     selectedEvent.event.setAllDay(updatedEvent.allDay);
  //     const updatedEvents = events.map((event) =>
  //       event.id === selectedEvent.id ? updatedEvent : event
  //     );
  //     setEvents(updatedEvents);
  //     localStorage.setItem("diet", JSON.stringify(updatedEvents));
  //     handleModalClose();
  //   }
  // };

  const handleDelete = () => {
    if (selectedEvent) {
      setShow(true);
      setEditModal(false);
    } else {
      console.error("No event selected for deletion.");
    }
  };


  // const handleDeleteConfirmation = () => {
  //   if (selectedEvent) {
  //     selectedEvent.event.remove();
  //     const updatedEvents = events.filter(
  //       (event) => event.id !== selectedEvent.id
  //     );
  //     setEvents(updatedEvents);
  //     localStorage.setItem("diet", JSON.stringify(updatedEvents));
  //     setShow(false);
  //     setSelectedEvent(null);
  //   } else {
  //     console.error("No event selected for deletion.");
  //   }
  // };


  const handleEventUpdate = () => {
    if (selectedEvent) {
      const calendarApi = selectedEvent.view.calendar;
      const updatedEvent = {
        id: selectedEvent.id,
        title: editTitle,
        diet: editDiet,
        desc: editDesc,
        meals: editMeals,
        isCheckboxChecked: isEditCheck,
        snacks: editSnacks,
        start: selectedEvent.startStr,
        end: selectedEvent.endStr,
        allDay: selectedEvent.allDay,
      };
  
      // Update event properties
      selectedEvent.event.setProp("title", updatedEvent.title);
      selectedEvent.event.setProp("diet", updatedEvent.diet);
      selectedEvent.event.setProp("desc", updatedEvent.desc);
      selectedEvent.event.setProp("meals", updatedEvent.meals);
      selectedEvent.event.setProp("isCheckboxChecked", updatedEvent.isCheckboxChecked);
      selectedEvent.event.setProp("snacks", updatedEvent.snacks);
      selectedEvent.event.setStart(updatedEvent.start);
      selectedEvent.event.setEnd(updatedEvent.end);
      selectedEvent.event.setAllDay(updatedEvent.allDay);
  
      const updatedEvents = events.map((event) =>
        event.id === selectedEvent.id ? updatedEvent : event
      );
      setEvents(updatedEvents);
      localStorage.setItem("diet", JSON.stringify(updatedEvents));
      handleModalClose();
    }
  };
  
  const handleDeleteConfirmation = () => {
    if (selectedEvent) {
      selectedEvent.event.remove(); // Remove event from calendar
      const updatedEvents = events.filter((event) => event.id !== selectedEvent.id);
      setEvents(updatedEvents);
      localStorage.setItem("diet", JSON.stringify(updatedEvents));
      setShow(false);
      setSelectedEvent(null);
    } else {
      console.error("No event selected for deletion.");
    }
  };
  

  const handleMeals = (value) => {
    setMeals((prevMeals) =>
      prevMeals.includes(value)
        ? prevMeals.filter((meal) => meal !== value)
        : [...prevMeals, value]
    );
  };

  const handleSnacks = (value) => {
    setSnacks((prevSnacks) =>
      prevSnacks.includes(value)
        ? prevSnacks.filter((snack) => snack !== value)
        : [...prevSnacks, value]
    );
  };

  return (
    <>
      <DataProvider>
        <CalendarBox
          handleDate={handleDate}
          handleEvent={handleEvent}
          events={events}
          setEvents={setEvents}
        />

<CreateModal
        title={title}
        setTitle={setTitle}
        diet={diet}
        events={events}
        setEvents={setEvents}
        setDiet={setDiet}
        meals={meals}
        snacks={snacks}
        handleMeals={handleMeals}
        handleSnacks={handleSnacks}
        setSnacks={setSnacks}
        desc={desc}
        setDesc={setDesc}
        showModal={showModal}
        isCheckboxChecked={isCheckboxChecked}
        setIsCheckboxChecked={setIsCheckboxChecked}
        handleModalSubmit={handleModalSubmit}
        handleModalClose={handleModalClose}
      />

        <EditModal
          events={events}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          editModal={editModal}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          editDiet={editDiet}
          setEditDiet={setEditDiet}
          editMeals={editMeals}
          setEditMeals={setEditMeals}
          editSnacks={editSnacks}
          setEditSnacks={setEditSnacks}
          editDesc={editDesc}
          setEditDesc={setEditDesc}
          isEditCheck={isEditCheck}
          setEditCheck={setEditCheck}
          handleModalClose={handleModalClose}
          handleSnacks={handleSnacks}
          handleMeals={handleMeals}
          handleEvent={handleEvent}
          handleEventUpdate={handleEventUpdate}
          handleDelete={handleDelete}
        />

        <DeleteModal
          show={show}
          handleClose={handleClose}
          handleDeleteConfirmation={handleDeleteConfirmation}
        />
      </DataProvider>
    </>
  );
};

export default Calendar;
