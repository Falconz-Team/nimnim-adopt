import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { withAuth0 } from '@auth0/auth0-react';
import LoginPlz from './LoginPlz';
import './ShowPets.css';
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
                <Modal style={{ background: 'rgba(52, 52, 52, 0.6)', fontFamily:'Playfair Display' }} size='xl' show={this.props.Show} >
                    <Modal.Header style = {{backgroundColor:'#8a8274'}}>
                        <Modal.Title style={{  color: 'white', fontSize:'35px', fontFamily: 'Playfair Display' }}>{this.props.breed}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
                        <Card style = {{borderStyle:'hidden'}}>
                            <img src={this.props.Image_Url} alt="image" style={{ height: '460px'}}  />
                        </Card>
                        <div style={{ marginLeft: '30px', marginTop: '20px' }}>
                            <div>
                            <p><strong><span style ={{fontSize:'1.5rem'}}>Gender: </span> <span style={{fontSize:'1.1rem'}}>{this.props.gender}</span></strong></p>
                            <p><strong><span style ={{fontSize:'1.5rem'}}>Age:</span> <span style={{fontSize:'1.1rem'}}>{this.props.Age}</span></strong></p>
                               
                            </div>
                            <div style={{ textAlign: 'left', padding: '5px' }}>
                            <h4><strong>Description:</strong></h4> 
                                <p><strong>{this.props.description}</strong></p>
                                
                            </div>
                            
                            {isAuthenticated &&
                                <div style={{ marginTop: '20px', marginLeft: '200px' }}>
                                    <button style={{width: '140px'}} class = 'btn' onClick={() => this.adopt()}>Adopt Now</button>
                                </div>
                            }
                            {!isAuthenticated &&
                                <div style={{  marginTop: '20px', marginLeft: '200px' }}>
                                    <button style={{width:'140px'}} class = 'btn' onClick={() => this.adoptPlz()} >Adopt Now</button>
                                </div>
                            }
                            {this.state.canAdopt &&
                            <p style={{marginTop:'5px', borderStyle:'solid', borderColor:'#8a8274',  padding: '5px'  }}><strong>Thank you. we are so grateful for the pleasure of serving you and hope we met your expectations, we will contact you soon, have a wonderful day.</strong></p>
                        }
                        </div>
                        
                        {this.state.signIn &&
                            <LoginPlz />
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        {console.log(this.props.HideModal)}
                        <button style={{width:'140px'}} class = 'btn' variant="secondary" onClick={this.props.hideModal}>Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default withAuth0(SelectedPets);