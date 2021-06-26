import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';

export class MainButtons extends Component {
	render() {
		return (
			<>
				<Container>
					<Row className="justify-content-md-center">
						<Col xs lg="auto">
							<Button href="#">Show Pets</Button>
						</Col>
						<Col>
							<Button type="submit">Add Pets</Button>
						</Col>
					</Row>
					<Row className="justify-content-md-center">
						<Col md={{ span: 2, offset: 2 }}>
							<Button type="submit">Sign Up</Button>
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default MainButtons
