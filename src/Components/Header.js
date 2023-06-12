import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Img/logoH.png";
import rating from "../assets/Img/sterren.jpg";

export default function Header() {
  return (
    <Navbar  expand="lg">
      <Container  className="px-lg-5 topbar">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="250px"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <img
              src={rating}
              width="180px"
              className="d-inline-block align-top rtimg"
              alt="rating"
            />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
