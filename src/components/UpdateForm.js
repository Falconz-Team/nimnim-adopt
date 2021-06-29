import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './updateForm.css';

export class UpdateForm extends Component {
	render() {
		return (
			<div id="div">
				<Modal show={true}>
					<div id="form-heading">
						<p className="title-update-style">Fill the form with the updated information</p>
					</div>
					<Form onSubmit={(e) => this.props.UpdatePet(e)} className="modelForm" bg="dark">
						<div className="form-container">

							<Form.Group className="mb-3">
								<Form.Label>Breed</Form.Label>
								<Form.Control placeholder="breed" className="input" type="text" onChange={(e) => this.props.updateBreed(e.target.value)} />
							</Form.Group>
							<Form.Group className="mb-3" >
								<Form.Label>Age</Form.Label>
								<Form.Control placeholder="age" className="input" type="text" onChange={(e) => this.props.updateAge(e.target.value)} />
							</Form.Group>
							<Form.Group className="mb-3" id="gender">
								<Form.Label>Gender</Form.Label>
								<Form.Group className="mb-3"  >
									{
										<div className="mb-3" id="check" >
											<Form.Check className="btn-gen" id="check1" onChange={() => this.props.updateGender('Male')}
												label="Male"
												name="group1"
												type={'radio'}
											/>
											<Form.Check className="btn-gen" id="check2" onChange={() => (this.props.updateGender('Female'))}
												label="Female"
												name="group1"
												type={'radio'}
											/>
										</div>
									}
								</Form.Group>
							</Form.Group>
							<Form.Group className="mb-3" id="Description">
								<Form.Label>Description</Form.Label>

								<Form.Control placeholder="description" className="input" type="text" onChange={(e) => this.props.updateDescription(e.target.value)} />
							</Form.Group>
							<Form.Group  >
								<Form.Control style={{ textAlign: 'center' }} className="input" type="file" onChange={this.props.updateHandleChange} />
							</Form.Group>
							<Form.Group style={{ textAlign: 'center' }}>
								<button className="button-update" type="submit" >
									Update
								</button>
								<button onClick={this.props.closeUpdateForm} className="button-update" type="submit">
									Close
								</button>
							</Form.Group>
						</div>
					</Form>
				</Modal>
			</div>
		);
	}
}

export default UpdateForm;
