import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
const Navlink = [
  {
    display: "Home",
    path: "/",
    style: "",
  },
  {
    display: "About",
    path: "/about",
    style: "",
  },
  {
    display: "Contact",
    path: "/contact",
    style: "",
  },
];
function NavbarCmp() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" id="navbar1">
      <Navbar.Brand>
        <Link to="/">
          <span>App</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>
          {Navlink.map((data, index) => (
            <Nav.Link key={index}>
              <Link to={data.path}>
                {data.display} &nbsp; {data.style}
              </Link>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarCmp;
