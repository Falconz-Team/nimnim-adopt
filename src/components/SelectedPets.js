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
                <Modal size = 'xl'show={this.props.shows} >
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: 'black' }}>{this.props.breed}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card style={{ backgroundColor: 'black' }}>
                            <img src={this.props.Image_Url} alt="image" />
                        </Card>
                    </Modal.Body>
                    <Modal.Body>
                        {this.props.gender}
                    </Modal.Body>
                    <Modal.Body>
                        {this.props.Age}
                    </Modal.Body>
                    <Modal.Body>
                        {this.props.description}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>Adopt Now</Button>
                        {console.log(this.props.HideModal)}
                        <Button onClick={this.HideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default SelectedPets;