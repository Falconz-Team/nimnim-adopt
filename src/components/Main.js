import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MainButtons from './MainButtons';
import { Button } from 'react-bootstrap';

export class Main extends React.Component {
	render() {
		return (
			<div>
				<Carousel fade>
					<Carousel.Item interval={1000} >
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1506993708131-b0bf29d16b76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
							alt="First slide"
						/>
						<div>
							<Button href="#">Show Pets</Button>
						</div>
					</Carousel.Item>
					<Carousel.Item interval={1000}>
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1599184488811-099b1e9aa9be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item interval={1000}>
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
							alt="Third slide"
						/>
					</Carousel.Item>
					<Carousel.Item interval={1000}>
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel >
				
			</div >
		)
	}
}

export default Main
