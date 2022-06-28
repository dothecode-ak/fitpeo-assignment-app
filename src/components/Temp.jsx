import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineGlobal } from "react-icons/ai";
const Temp = (props) => {
  const { tittle, img, days, people, percentage } = props.item;
  return (
    <Card style={{ marginBottom: "30px" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{tittle}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{days} days</ListGroupItem>
        <ListGroupItem>{people} people</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "1px" }}>
            <AiOutlineHeart />
            <AiOutlineGlobal />
          </div>
          <div>
            <Card.Link style={{ color: "red" }}>{percentage} %</Card.Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Temp;
