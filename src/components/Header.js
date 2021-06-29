import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
export class Header extends React.Component {
  render() {
   
    return (
      <div class="header-color" id="ee">
        <Navbar collapseOnSelect expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="/">
              <img src="https://i.pinimg.com/originals/51/77/2b/51772b49f5446c03100df6d6d61b55e2.png"
                width="60" height="50" alt="logo" fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Pet's" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/AddPets">Add Pet</NavDropdown.Item>
                  <NavDropdown.Item href="/ShowCategory">Show Categories of Pets</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Cats">Cat's Page</NavDropdown.Item>
                  <NavDropdown.Item href="/Dogs">Dog's Page</NavDropdown.Item>
                  <NavDropdown.Item href="/Birds">Bird's Page</NavDropdown.Item>
                  <NavDropdown.Item href="/Other">Other's Page</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/CarePage">Care Pet's</Nav.Link>
                <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
