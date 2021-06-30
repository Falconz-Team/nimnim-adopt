// import React, { Component } from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import UpdateForm from './UpdateForm';
import './AddPets.css';
import { withAuth0 } from '@auth0/auth0-react';

import LoginPlz from './LoginPlz';

export class AddPets extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			breed: '',
			age: '',
			gender: '',
			description: '',
			image_Url: '',
			updateBreed: '',
			updateAge: '',
			updateGender: '',
			updateDescription: '',
			updateImage_Url: '',
			creatData: '',
			userEmail: 'mohammad@k.com',
			REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
			NumberPets: 0,
			updateIndx: '',
			showForm: false,
			files: null,
			updateFlies: null,
			plzLog : false

		};
		this.handleChange = this.handleChange.bind(this);
		this.updateHandleChange = this.updateHandleChange.bind(this);

	}

	handleChange(event) {

		this.setState({
			files: URL.createObjectURL(event.target.files[0]),

		});
		console.log('1', this.state.files);
	}

	breed = (breed) => this.setState({ breed });
	age = (age) => this.setState({ age });
	gender = (gender) => this.setState({ gender });
	description = (description) => this.setState({ description });

	updateBreed = (updateBreed) => this.setState({ updateBreed });
	updateAge = (updateAge) => this.setState({ updateAge });
	updateGender = (updateGender) => this.setState({ updateGender });
	updateDescription = (updateDescription) => this.setState({ updateDescription });


	updateHandleChange = (e) => {
		this.setState({
			updateFlies: URL.createObjectURL(e.target.files[0]),
		});
	}

	componentDidMount = () => {
		axios.get(`${this.state.REACT_APP_SERVER_URL}/pet?email=${this.state.userEmail}`).then((response) => {
			this.setState({
				creatData: response.data.pets,
				NumberPets: response.data.pets.length,
			});
		});
	}

	createPets = (e) => {
		e.preventDefault();
		console.log('2', this.state.files);

		const reqBody = {
			email: this.state.userEmail,
			breed: this.state.breed,
			age: this.state.age,
			gender: this.state.gender,
			description: this.state.description,
			image_Url: this.state.files,

		};
		axios.post(`${this.state.REACT_APP_SERVER_URL}/pet`, reqBody).then(response => {
			this.setState({
				creatData: response.data.pets,
				NumberPets: response.data.pets.length,
			});
		}).catch(error =>
			alert(error.message),
		);
	}

	deletePet = (indx) => {
		axios.delete(`${this.state.REACT_APP_SERVER_URL}/pet/${indx}?email=${this.state.userEmail}`).then((response) => {
			console.log('backdata', response);
			this.setState({
				creatData: response.data.pets,
				NumberPets: response.data.pets.length,
				showForm: false,
			});
		}).catch(error =>
			alert(error.message),
		);
	}

	UpdatePet = (e) => {
		e.preventDefault();
		const reqBody = {
			email: this.state.userEmail,
			breed: this.state.updateBreed,
			age: this.state.updateAge,
			gender: this.state.updateGender,
			description: this.state.updateDescription,
			image_Url: this.state.updateFlies,
		};

		axios.put(`${this.state.REACT_APP_SERVER_URL}/pet/${this.state.updateIndx}`, reqBody).then(response => {
			console.log('post data', response);
			this.setState({
				creatData: response.data.pets,
				NumberPets: response.data.pets.length,
				showUpdateModel: false,
				showForm: false,
			});
		}).catch(error =>
			alert(error.message),
		);

	}
	
	openUpdateForm = (indx) => {
		this.setState({
			showForm: true,
			updateIndx: indx,
		});
	}
	closeUpdateForm = () => {
		this.setState({
			showForm: false,
		});
	}

	isLogin = () => {

		this.setState({
		
			userEmail: this.props.auth0.user.email,
		})
		console.log('userEmailLogin', this.state.userEmail);
	}

	isLogout = () => {
		this.setState({
			plzLog : true,
			userEmail: 'mohammad@k.com'
		})
		console.log('userEmailLogout ', this.state.userEmail);
	}


	render() {
		console.log('apps', this.props);
		const { isAuthenticated } = this.props.auth0;

		return (
			<><div id={'body'}>
				<div id="AddForm">
					<p style={{ textAlign: 'left' }} id="p">Fill the form with the proper information and submit your offer, your request will be responded soon.</p>
					<Form onSubmit={(e) => this.createPets(e)}>
						<Form.Group className="mb-3">
							<Form.Label>Breed</Form.Label>
							<Form.Control className="input" type="text" onChange={(e) => this.breed(e.target.value)} placeholder="Breed"/>
						</Form.Group>
						<Form.Group className="mb-3" >
							<Form.Label>Age</Form.Label>
							<Form.Control className="input" type="text" onChange={(e) => this.age(e.target.value)} placeholder="Age"/>
						</Form.Group>
						<Form.Group className="mb-3">
						<Form.Label>Gender</Form.Label>
							
							<Form.Group className="mb-3"  >
								{
									<div className="mb-3" id="check" >
										
										<Form.Check className ="check" id="check1" onChange={()=>this.gender('Male')}
											
											label="Male"
											name="group1"
											type={'radio'}
											
											
										/>
									
									<Form.Check className ="check" id="check2" onChange={()=>(this.gender('Female'))}
											
											label="Female"
											name="group1"
											type={'radio'}
											
											
										/>
									
									</div>
									
								}
							</Form.Group>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Description</Form.Label>
							<Form.Control className="input" type="text" onChange={(e) => this.description(e.target.value)} placeholder="Description"/>
						</Form.Group>
						<Form.Group  >
							<Form.Control style={{ marginLeft: '20%' }} className="input" type="file" onChange={this.handleChange} />
						</Form.Group>
						<Form.Group style={{ textAlign: 'center' }}>
							{isAuthenticated &&
								<button className="buttonForm" onClick={() => this.isLogin()} type="submit" >
									AddPets
								</button>
							}
							{!isAuthenticated  &&
								<button className="buttonForm" onClick={() => this.isLogout()} type="submit">
									AddPets
								</button>
							}

						</Form.Group>

					</Form>

				</div>
				<div id="cardRender">
					<div id="card">
						{
							this.state.NumberPets > 0 &&
							this.state.creatData.map((value, indx) => {
								return <Card style={{ width: '17rem' }}>

									<Card.Img variant="top" src={value.image_Url} style={{ height: '150px' }} />
									<Card.Body className="cardBody">
										<Card.Text>Breed: {value.breed}</Card.Text>
										<Card.Text>
											Age: {value.age}
										</Card.Text>
										<Card.Text>
											Gender:  {value.gender}
										</Card.Text>
										<Card.Text>
											Description: {value.description}
										</Card.Text>
										<button variant="primary" onClick={() => this.deletePet(indx)} id="del-btn">Delete</button>
										<button variant="secondary" onClick={() => this.openUpdateForm(indx)} id="up-btn">Update</button>
									</Card.Body>
								</Card>;
							})

						}
					</div>
					<div>



						{this.state.showForm &&
							<UpdateForm
								closeUpdateForm={this.closeUpdateForm}
								updateBreed={this.updateBreed}
								updateAge={this.updateAge}
								updateGender={this.updateGender}
								updateDescription={this.updateDescription}
								UpdatePet={this.UpdatePet}
								updateHandleChange={this.updateHandleChange}
							/>
						}
					</div>
				</div>
			</div>
			{this.state.plzLog &&
                            <LoginPlz />
                        }
			</>
		);
	}
}

export default withAuth0(AddPets);

