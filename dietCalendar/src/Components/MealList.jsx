import React from "react";
import Meal from "./Meal";
import ListGroup from "react-bootstrap/ListGroup";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main className="box">
      <section className="nutrients">
        <h1>Nutrients</h1>
        <div className="nuts">
        {["md"].map((breakpoint) => (
          <>
            <ListGroup
              key={breakpoint}
              horizontal={breakpoint}
              className="my-2"
            >
              <ListGroup.Item>Calories</ListGroup.Item>
              <ListGroup.Item>{nutrients.calories.toFixed(0)}</ListGroup.Item>
            </ListGroup>
            <ListGroup
              key={breakpoint}
              horizontal={breakpoint}
              className="my-2"
            >
              <ListGroup.Item>Carbohydrates</ListGroup.Item>
              <ListGroup.Item>{nutrients.carbohydrates.toFixed(0)}</ListGroup.Item>
            </ListGroup>
            <ListGroup
              key={breakpoint}
              horizontal={breakpoint}
              className="my-2"
            >
              <ListGroup.Item>Fat</ListGroup.Item>
              <ListGroup.Item>{nutrients.fat.toFixed(0)}</ListGroup.Item>
            </ListGroup>
            <ListGroup
              key={breakpoint}
              horizontal={breakpoint}
              className="my-2"
            >
              <ListGroup.Item>Protein</ListGroup.Item>
              <ListGroup.Item>{nutrients.protein.toFixed(0)}</ListGroup.Item>
            </ListGroup>
          </>
        ))}</div>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </section>
    </main>
  );
}
