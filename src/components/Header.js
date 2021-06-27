import React from 'react'
import { Container, Col, Nav, Row } from 'react-bootstrap';
import './carousel.css';

export class Header extends React.Component {
    render() {
        return (
            <div class="mt-3 ">
                <Container>
                <header className='header-color'>
                <Row>
                    <Col><a href = "/"> <img src = "https://image.flaticon.com/icons/png/512/616/616596.png" width="50" height="50" alt ="logo" /></a></Col>
                    <Col>
                <Nav fill variant="tabs" defaultActiveKey="/"  expand="lg" bg="dark">
                    <Nav.Item>
                        <Nav.Link href="/" className='font-color'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="ShowPets" href="/ShowPets" className='font-color'>Show Pets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="AddPets" href="/AddPets" className='font-color'>Add Pets</Nav.Link>
                    </Nav.Item>
					<Nav.Item>
                        <Nav.Link eventKey="ShowCategory" href="/ShowCategory" className='font-color'>Show Category</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="CarePage" href="/CarePage" className='font-color'>Care Page</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="AboutUs" href="AboutUs" className='font-color'>About US</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                </Row>
                </header>
                </Container>
            </div>

            
        )
    }
}

export default Header
