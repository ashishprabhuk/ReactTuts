import axios from "axios";
import React, { useState } from "react";
import MealList from "./MealList";
import { InputGroup, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function MealBox() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const API_KEY = "ce2313ce148c4f87998b9928fd1d20ba";
  const API_KEY2 = "800cb3c3a637417e91c1ee42c18d88b4";

  async function getMealData() {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY2}&timeFrame=day&targetCalories=${calories}`
      );
      setMealData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching meal data:", error.message);
    }
  }

  return (
    <div>
      <h1 style={{margin:"10px 0px"}}>Meal Plan Generator</h1>
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
              value={calories}
              onChange={e=> setCalories(e.target.value)}
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
