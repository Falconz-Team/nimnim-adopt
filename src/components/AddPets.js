import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import UpdateForm from './UpdateForm';
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
	  file: null,
	  files: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      files: URL.createObjectURL(event.target.files[0]),
    });
   
  }

  upload = () =>{
    this.setState({
      file: this.state.files,
	  });
  }

	breed = (breed) => this.setState({ breed });
	age = (age) => this.setState({ age });
	gender = (gender) => this.setState({ gender });
	description = (description) => this.setState({ description });

	image = (imag) => {
	  this.setState({
	    image_Url: imag,
	  });
	}


	updateBreed = (updateBreed) => this.setState({ updateBreed });
	updateAge = (updateAge) => this.setState({ updateAge });
	updateGender = (updateGender) => this.setState({ updateGender });
	updateDescription = (updateDescription) => this.setState({ updateDescription });

	updateImage_Url = (imag) => {
	  this.setState({
	    updateImage_Url: imag,
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
	    image_Url: this.state.files,
	  };

	  axios.put(`${this.state.REACT_APP_SERVER_URL}/pet/${this.state.updateIndx}`, reqBody).then(response => {
	    console.log('post data', response);
	    this.setState({
	      creatData: response.data.pets,
	      NumberPets: response.data.pets.length,
	      showUpdateModel: false,
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
	    <>
	      <div>
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
	            <Form.Text className="text-muted">
								We will allow you to add a private picture of your pet when accepting your request
	            </Form.Text>
	          </Form.Group>
	          <Button variant="primary" type="submit">
							AddPets
	          </Button>
	        </Form>
	      </div>
	      <div>
	        {
	          this.state.NumberPets > 0 &&
						this.state.creatData.map((value, indx) => {
						  return <Card style={{ width: '18rem' }}>

						    <Card.Img variant="top" src={value.image_Url} />
						    <Card.Body>
						      <Card.Title>{value.breed}</Card.Title>
						      <Card.Text>
						        {value.age}
						      </Card.Text>
						      <Card.Text>
						        {value.gender}
						      </Card.Text>
						      <Card.Text>
						        {value.description}
						      </Card.Text>
						      <Button variant="primary" onClick={() => this.deletePet(indx)}>delete</Button>
							  <Button variant="secondary" onClick={() => this.openUpdateForm(indx)}>Update</Button>

						    </Card.Body>
						  </Card>;
						})

	        }
	        {this.state.showForm && 
				<UpdateForm 

				  closeUpdateForm={this.closeUpdateForm} 
				  updateBreed={this.updateBreed}
				  updateAge={this.updateAge}
				  updateGender={this.updateGender} 
				  updateDescription={this.updateDescription}
				  updateImage_Url={this.updateImage_Url} 
				  UpdatePet={this.UpdatePet}
				  />
	        }

	      </div>
	    </>
	  );
    }
}

export default AddPets;
