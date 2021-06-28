// import React, { Component } from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import UpdateForm from './UpdateForm';
import './AddPets.css';
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
	  updateIndx :'',
	  showForm: false,
	  files: null,
	  updateFlies: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateHandleChange = this.updateHandleChange.bind(this);
   
  }

  handleChange(event) {

    this.setState({
      files:  URL.createObjectURL(event.target.files[0]),
	  
    });
    console.log('1',this.state.files);
  }

  

	breed = (breed) => this.setState({ breed });
	age = (age) => this.setState({ age });
	gender = (gender) => this.setState({ gender });
	description = (description) => this.setState({ description });

	


	updateBreed = (updateBreed) => this.setState({ updateBreed });
	updateAge = (updateAge) => this.setState({ updateAge });
	updateGender = (updateGender) => this.setState({ updateGender });
	updateDescription = (updateDescription) => this.setState({ updateDescription });


	updateHandleChange = (e) =>{
	  this.setState({
	    updateFlies: URL.createObjectURL(e.target.files[0]),
		  });
	}
	componentDidMount  = () =>{


	    axios.get(`${this.state.REACT_APP_SERVER_URL}/pet?email=${this.state.userEmail}`).then((response) => {
	    this.setState({
	      creatData: response.data.pets,
	      NumberPets: response.data.pets.length,
	    });
	  });
	}

	createPets = (e) => {
	  e.preventDefault();
	  console.log('2',this.state.files);

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
		  showForm : false,
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








    render() {
	  return (
	    <><div id={'body'}>
	      <div id ="AddForm">
		  Submit your request and we will respond as soon as possible
	        <Form onSubmit={(e) => this.createPets(e)}>
	          <Form.Group className="mb-3">
	            <Form.Label>breed</Form.Label>
	            <Form.Control type="text" onChange={(e) => this.breed(e.target.value)} />
	          </Form.Group>
	          <Form.Group className="mb-3" >
	            <Form.Label>age</Form.Label>
	            <Form.Control type="text" onChange={(e) => this.age(e.target.value)} />
	          </Form.Group>
	          <Form.Group className="mb-3">
	            <Form.Label>gender</Form.Label>
	            <Form.Control type="text" onChange={(e) => this.gender(e.target.value)} />
	          </Form.Group>
	          <Form.Group className="mb-3">
	            <Form.Label>description</Form.Label>
	            <Form.Control type="text" onChange={(e) => this.description(e.target.value)} />
	          </Form.Group>
	          <Form.Group  >
	            <Form.Label>select image</Form.Label>
                <Form.Control type="file" onChange={this.handleChange} />
	          </Form.Group>
	          <Button  type="submit" className="addPets">
							AddPets
	          </Button>
	        </Form>
	      </div>
	      <div id="cardRender">
			  <div id="card">
	        {
	          this.state.NumberPets > 0 &&
						this.state.creatData.map((value, indx) => {
						  return <Card style={{ width: '14rem' }}>

						    <Card.Img variant="top" src={value.image_Url} />
						    <Card.Body className="cardBody">
						      <Card.Title>breed :{value.breed}</Card.Title>
						      <Card.Text>
							  age: {value.age}
						      </Card.Text>
						      <Card.Text>
						      gender:  {value.gender}
						      </Card.Text>
						      <Card.Text>
							  description : {value.description}
						      </Card.Text>
						      <Button variant="primary" onClick={() => this.deletePet(indx)}>delete</Button>
							  <Button variant="secondary" onClick={() => this.openUpdateForm(indx)}>Update</Button>
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
	    </>
	  );
    }
}

export default AddPets;
