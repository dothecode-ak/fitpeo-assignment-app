import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Temp from "./Temp";
import { productData } from "../data";
const Cards = () => {
  const [data, setData] = useState(productData);
  const notfound = document.getElementById("notfound");
  const handleSearch = (event) => {
    let value = event.target.value;
    const finaldata = productData.filter((dt) =>
      dt.tittle.toLowerCase().includes(value.toLowerCase())
    );
    setData(finaldata);
    if (finaldata.length === 0) {
      notfound.style.display = "block";
    } else {
      notfound.style.display = "none";
    }
  };
  return (
    <div style={{ marginTop: "120px" }}>
      <Container>
        <Row>
          <Col lg={12}>
            <h6 style={{ textAlign: "center" }}>All Tours List</h6>
          </Col>
          <Col lg={12}>
            <input
              type={"text"}
              onChange={handleSearch}
              placeholder="Search the item..."
            />
          </Col>
        </Row>
        <Row>
          {data.map((item) => (
            <Col lg={3} md={4} sm={6} key={item.id} className="mt-5">
              <Temp item={item} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col lg={12}>
            <h6 style={{ display: "none" }} id="notfound">
              Not Found
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
