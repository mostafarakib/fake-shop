import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  const { cart } = props;

  let totalQuantity = 0;

  for (const addedProduct of cart) {
    addedProduct.quantity = !addedProduct.quantity ? 1 : addedProduct.quantity;
    totalQuantity = totalQuantity + addedProduct.quantity;
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Fake Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Review Items
            </Nav.Link>
            <NavDropdown title="Category" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/laptop">
                Laptop
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/camera">
                Camera
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/aboutUs">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contactUs">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span> {totalQuantity}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
