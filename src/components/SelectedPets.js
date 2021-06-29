import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class SelectedPets extends Component { 
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         setShow: false,
    //     };
    // }
    // handleClose = () => {
    // this.setState({
    //     setShow: false,
    // });
    // }

    
    render() {
        return (
            <div>
            {console.log('1')}
            <Modal style={{ background: 'rgba(52, 52, 52, 0.6)' }} size='xl' show={this.props.Show} >
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'black' }}>{this.props.breed}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{  display: 'grid', gridTemplateColumns: '50% 50%' }}>
                    <Card style={{height: '490px'}}>
                        <img src={this.props.Image_Url} alt="image" />
                    </Card>
                    <div style={{marginLeft: '30px' }}>
                        <div>
                            <h4>Gender: {this.props.gender}</h4>
                            <h4>Age: {this.props.Age}</h4>
                        </div>
                        <div style={{ backgroundColor: 'lightgray', textAlign: 'center', padding: '5px' }}>
                            <p><strong>{this.props.description}</strong></p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button>Adopt Now</Button>
                    {console.log(this.props.HideModal)}
                    <Button variant="secondary" onClick={this.props.hideModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
        );
    }
}

export default SelectedPets;