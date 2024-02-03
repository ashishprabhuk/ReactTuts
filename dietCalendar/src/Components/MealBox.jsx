// MealBox.js
import axios from "axios";
import React, { useState } from "react";
import MealList from "./MealList";
import { InputGroup, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function MealBox() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const API_KEY = "ce2313ce148c4f87998b9928fd1d20ba";

  async function getMealData() {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=ce2313ce148c4f87998b9928fd1d20ba&timeFrame=day&targetCalories=${calories}`
      );
      setMealData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching meal data:", error.message);
    }
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div>
      <h1>Meal Plan Generator</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "225px" }}>
          <InputGroup>
            <InputGroup.Text>kg</InputGroup.Text>
            <Form.Control
              type="number"
              id="inlineFormInputGroupUsername"
              placeholder="Calories (eg:2000)"
            />
          </InputGroup>
          <Button variant="primary" className="m-3" onClick={() => getMealData()}>Get Meal Plan</Button>
        </div>
      </div>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default MealBox;
