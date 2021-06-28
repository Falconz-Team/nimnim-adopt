// import React, { Component } from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
export class AddPets extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      breed: '',
      age: '',
      gender: '',
      description: '',
      image_Url: '',
      creatData: '',
	  userEmail : 'mohammad@k.com',
	  REACT_APP_SERVER_URL : process.env.REACT_APP_SERVER_URL,
	  NumberPets :0,
    };
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


	createPets = (e) => {
	  e.preventDefault();
	  console.log('img after select',this.state.image_Url);
	  const reqBody = {
	    userEmail: this.state.userEmail,
	    breed: this.state.breed,
	    age: this.state.age,
	    gender: this.state.gender,
	    description: this.state.description,
	    image_Url: this.state.image_Url,

	  };
	  console.log('image go',this.state.image_Url);
	  axios.post(`${this.state.REACT_APP_SERVER_URL}/pet`, reqBody).then(response => {
		  console.log('backdata',response);
	    this.setState({
	      creatData: response.data.pets,
		  NumberPets: response.data.pets.length,
	    });
	  }).catch(error =>
	    alert(error.message),
	  );
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
	            <Form.Label>default image</Form.Label>
	            <Form.Control onChange={(e) => this.image(e.target.value)} as="select">
	              <option >plz select kind of your pet</option>
	              <option value ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToFfAhy7V097GEFRDPebLCXu1KD2qEIJavgw&usqp=CAU">cat</option>
	              <option value ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayEsDcc7SJXiQdiv6DI6iMdyQKxoZpbKRGA&usqp=CAU">dog</option>
	              <option value ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkX6eLIAycYpVEgiiP1rNBbOtPuronIFtvw&usqp=CAU">bird</option>
	              <option value ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78J1bYAFMlYT_07y4rC4VGHeofOnhMk2Zqg&usqp=CAU">other</option>
	            </Form.Control>
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
	          this.state.NumberPets> 0 &&
			  this.state.creatData.map(value =>{
			    console.log('img',value.image_Url);
				  return  <Card style={{ width: '18rem' }}>
					  
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
					  <Button variant="primary">delete</Button>
					  <Button variant="primary">update</Button>

				  </Card.Body>
				  </Card>;
			  })
			 
	        }

	      </div>
	    </>
	  );
	}
}

export default AddPets;
