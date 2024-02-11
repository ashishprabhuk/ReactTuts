import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
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
      const id = new Date().getTime();
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
      selectedEvent.event.setProp("title", updatedEvent.title);
      selectedEvent.event.setProp("diet", updatedEvent.diet);
      selectedEvent.event.setProp("desc", updatedEvent.desc);
      selectedEvent.event.setProp("meals", updatedEvent.meals);
      selectedEvent.event.setProp(
        "isCheckboxChecked",
        updatedEvent.isCheckboxChecked
      );
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

  // const handleDelete = () => {
  //   setShow(true);
  //   setEditModal(false);
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
  //   }
  // };

  const handleDeleteConfirmation = () => {
    if (selectedEvent) {
      selectedEvent.event.remove();
      const updatedEvents = events.filter(
        (event) => event.id !== selectedEvent.id
      );
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
    <DataContext.Provider
      value={{
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
