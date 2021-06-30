import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { withAuth0 } from '@auth0/auth0-react';
import LoginPlz from './LoginPlz';
export class SelectedPets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canAdopt: false,
            signIn: false
        };
    }

    adopt = () => {
        this.setState({
            canAdopt: true,
        });
    }
    adoptPlz = () => {
        this.setState({
            signIn: true,
        });
    }

    render() {
        console.log('app', this.props);
        const { isAuthenticated } = this.props.auth0;
        return (
            <div>
                {console.log('1')}
                <Modal style={{ background: 'rgba(52, 52, 52, 0.6)' }} size='xl' show={this.props.Show} >
                    <Modal.Header >
                        <Modal.Title style={{ color: 'black' }}>{this.props.breed}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
                        <Card >
                            <img src={this.props.Image_Url} alt="image" style={{ height: '460px' }} />
                        </Card>
                        <div style={{ marginLeft: '30px', marginTop: '50px' }}>
                            <div>
                                <h4>Gender: {this.props.gender}</h4>
                                <h4>Age: {this.props.Age}</h4>
                                <br></br>
                            </div>
                            <div style={{ textAlign: 'left', padding: '5px' }}>
                                <p><strong>{this.props.description}</strong></p>
                                
                            </div>
                            
                            {isAuthenticated &&
                                <div style={{ marginTop: '20px', marginLeft: '200px' }}>
                                    <Button onClick={() => this.adopt()}>Adopt Now</Button>
                                </div>
                            }
                            {!isAuthenticated &&
                                <div style={{ marginTop: '20px', marginLeft: '200px' }}>
                                    <Button onClick={() => this.adoptPlz()} >Adopt Now</Button>
                                </div>
                            }
                            {this.state.canAdopt &&
                            <p style={{marginTop:'10px', backgroundColor: 'rgba(280, 233, 300, 0.999)',  padding: '5px'  }}><strong>Thank you. we are so grateful for the pleasure of serving you and hope we met your expectations, we will contact you soon, have a wonderful day.</strong></p>
                        }
                        </div>
                        
                        {this.state.signIn &&
                            <LoginPlz />
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        {console.log(this.props.HideModal)}
                        <Button variant="secondary" onClick={this.props.hideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default withAuth0(SelectedPets);