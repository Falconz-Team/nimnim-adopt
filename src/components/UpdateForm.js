import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './updateForm.css';

export class UpdateForm extends Component {
  render() {
    return (
      <div id="div">
        <Modal show={true} id="model">
          <Form onSubmit={(e) => this.props.UpdatePet(e)} className="modelForm">
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
              <Form.Label>select image</Form.Label>
              <Form.Control type="file" onChange={this.props.updateHandleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                        Update
            </Button>
            <Button variant="secondary" onClick={this.props.closeUpdateForm}>Close</Button>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default UpdateForm;
