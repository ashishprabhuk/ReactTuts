import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const API_KEY = "9a32f6be915d47b6be272f95d6dec66d";
  const API_KEY2 = "800cb3c3a637417e91c1ee42c18d88b4";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${API_KEY2}&includeNutrition=false`
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
    <article className="cards">
      <Container>
      <Row>
        <Col>
          <Card className="cardbox" style={{ width: '23rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body className="cardbox">
              <Card.Title className="ctitle">{meal.title}</Card.Title>
              <Card.Text className="cPara">Preparation time: {meal.readyInMinutes} minutes</Card.Text>
              <Card.Text className="cPara">Number of servings: {meal.servings}</Card.Text>
              <Button href={meal.sourceUrl} variant="primary">
                Go to Recipe
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </article>
  );
}
