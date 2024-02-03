import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const API_KEY = "9a32f6be915d47b6be272f95d6dec66d";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=ce2313ce148c4f87998b9928fd1d20ba&includeNutrition=false`
        );
        const data = await response.json();
        setImageUrl(data.image);
      } catch (error) {
        console.error("Error fetching meal image:", error.message);
      }
    };
    fetchData();
  }, [meal.id]);

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  );
}
