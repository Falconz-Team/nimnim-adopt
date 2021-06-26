import React from 'react'
import { Container, Col, Nav, Row } from 'react-bootstrap';




export class Header extends React.Component {
    render() {
        return (
            <div class="mt-3 ">
                <Container>
                <header>
                <Row>
                    <Col><a href = "/home"> <img src = "https://image.flaticon.com/icons/png/512/616/616596.png" width="50" height="50" alt ="logo" /></a></Col>
                    <Col>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Show Pets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home">Add Pets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home">Care Page</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">About US</Nav.Link>
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
