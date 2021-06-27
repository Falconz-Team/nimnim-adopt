import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class UpdateForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={(e) => this.props.UpdatePet(e)}>
          <Form.Group className="mb-3">
            <Form.Label>breed</Form.Label>
            <Form.Control type="text" onChange={(e) => this.props.updateBreed(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>age</Form.Label>
            <Form.Control type="text" onChange={(e) => this.props.updateAge(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>gender</Form.Label>
            <Form.Control type="text" onChange={(e) => this.props.updateGender(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>description</Form.Label>
            <Form.Control type="text" onChange={(e) => this.props.updateDescription(e.target.value)} />
          </Form.Group>
          <Form.Group  >
            <Form.Label>default image</Form.Label>
            <Form.Control onChange={(e) => this.props.updateImage_Url(e.target.value)} as="select">
              <option >plz select kind of your pet</option>
              <option value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToFfAhy7V097GEFRDPebLCXu1KD2qEIJavgw&usqp=CAU">cat</option>
              <option value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayEsDcc7SJXiQdiv6DI6iMdyQKxoZpbKRGA&usqp=CAU">dog</option>
              <option value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkX6eLIAycYpVEgiiP1rNBbOtPuronIFtvw&usqp=CAU">bird</option>
              <option value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78J1bYAFMlYT_07y4rC4VGHeofOnhMk2Zqg&usqp=CAU">other</option>
            </Form.Control>
            <Form.Text className="text-muted">
                            We will allow you to add a private picture of your pet when accepting your request
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
                        Update
          </Button>
          <Button variant="secondary" onClick={this.props.closeUpdateForm}>Close</Button>
        </Form>
      </div>
    );
  }
}

export default UpdateForm;
