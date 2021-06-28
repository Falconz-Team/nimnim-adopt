import React from 'react';
import { Container, Col, Nav, Row, NavDropdown } from 'react-bootstrap';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <div class="mt-3">
        <Container className="position">
          <header className='header-color'>
            <Row>
              <Col className="logo">
			  <a href="/"> 
			  <img src="https://i.pinimg.com/originals/51/77/2b/51772b49f5446c03100df6d6d61b55e2.png" width="60" height="60" alt="logo" />
			  </a>
			  </Col>
              <Col>
                <Nav fill variant="dark" defaultActiveKey="/" expand="lg">
                  <Nav.Item>
                    <Nav.Link href="/" className="text-my-own-color">HOME</Nav.Link>
                  </Nav.Item>
                  <NavDropdown title="PETS" class="text-white"> 
                    <NavDropdown.Item href="/ShowPets" className="bg-color">SHOW PETS</NavDropdown.Item>
                    <NavDropdown.Item href="/AddPets" className="bg-color">ADD PETS</NavDropdown.Item>
                    <NavDropdown.Item href="/ShowCategory" className="bg-color">SHOW CATEGORY</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Item>
                    <Nav.Link eventKey="CarePage" href="/CarePage" className="text-my-own-color">WHY SHOULD I ADOPT?</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="AboutUs" href="AboutUs" className="text-my-own-color">ABOUT US</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </header>
        </Container>
      </div>
    );
  }
}

export default Header;
