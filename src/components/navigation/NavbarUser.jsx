import React from "react";
import logo from "../../assets/img/logo_jorges.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoCallOutline } from "react-icons/io5";
import {
  BsPersonCircle,
  BsSearch,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./stylesScreens/NavbarUserStyle.css";

function NavbarUser() {
  const funtion_serch = () => {
    alert("Buscando");
  };
  const closeAuth = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <div className="content">
      <div className="navbar-user-container">
        <div className="navbar-user-logo">
          <img src={logo} className="navbar-user-logo" alt="Logo" />
        </div>
        <div className="navbar-user-text">
          Sistema de Gestion para Refacciones Automotrices
        </div>
        <div className="navbar-user-button">
          <Button className="shadow-sm w-150 w-md-auto" variant="danger" onClick={closeAuth}>
            Cerrar Sesión <BsFillArrowRightCircleFill size={15} />
          </Button>
        </div>
      </div>
      {/* Navbar btstrap */}
      <Navbar className="shadow-sm" expand="lg" style={{ backgroundColor: "#f57921" }}>
        <Container fluid>
          <Navbar.Brand href="/" className="navbar-user-brand">
            SIREF
          </Navbar.Brand>
          
          <Form className="d-flex navbar-user-search-form">
            <Form.Control
              type="search"
              placeholder="Encuentra refacciones"
              className="me-2 w-100 w-md-auto navbar-user-search-input"
              aria-label="Search"
            />
            <Button variant="none" className="navbar-user-search-btn" onClick={funtion_serch}>
              <BsSearch size={25} />
            </Button>
          </Form>
         
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex justify-content-end align-items-center">
              <div className="navbar-user-username">Bryan.R0</div>
              <BsPersonCircle style={{ marginLeft: "5%" }} size={25} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarUser;
