import "./App.css";
import Calendar from "./Components/Calendar";
import Header from "./Components/Header";
import {Routes, Route} from "react-router-dom";
import MealBox from "./Components/MealBox";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Calendar />}/>
        <Route path="/meal" element={<MealBox />}/>
      </Routes>
    </>
  );
}

export default App;
