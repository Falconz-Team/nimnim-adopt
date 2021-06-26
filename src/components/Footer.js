import React from 'react'
import { Container, Col, Nav, Row } from 'react-bootstrap';

export class Footer extends React.Component {
	render() {
		return (
			<>
				<footer>
					<Row className="justify-content-md-center">
						<Col xs lg="2">
							<div class="mt-3">
									<a href="#"><i class="fab fa-facebook-f"></i></a>
									<a href="#"><i class="bi bi-linkedin"></i></a>
									<a href="#"><i class="bi bi-instagram"></i></a>
									<a href="#"><i class="bi bi-github"></i></a>
							</div>
						</Col>
						<Col md="auto"> © 2021 Copyright: Falcons Team</Col>
					</Row>
				</footer >
			</>
		)
	}
}

export default Footer
