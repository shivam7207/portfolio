import React from "react";
import img from "../../assets/img1.png";
import Card from "react-bootstrap/Card";
import "./ArticleCard.scss";

const ArticleCard = () => {
  return (
    <div  className="card-container">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArticleCard;
