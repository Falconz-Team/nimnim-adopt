import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import './Cats.css';
import SelectedPets from './SelectedPets';


export class Cats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverUrl: process.env.REACT_APP_SERVER_URL,
      image_Url: '',
      petData: [],
      breed: '',
      description: '',
      Show: false,
      Breed:'',
      Age:'',
      selected:'',
      setShow: false,

    };
    this.hideModal = this.hideModal.bind(this);
  }
  hideModal = () => {
    this.setState({ setShow: false });
  };
  

  ClickNow = (breedData) => {
    let selected = 0;
    this.state.petData.map(value => {
      if (value.breed === breedData) {
        selected = value;
      }
      return selected ;
    })
    this.setState({
      selected: selected,
      Show: true,
    })
  }
  handleClose = ()=>{
    this.setState({
      setShow: false,
    })
  }


  componentDidMount = () => {
    axios.get(`${this.state.serverUrl}/pets`).then((response, idx) => {

      this.setState({
        image_Url: this.state.image_Url,
        description: this.state.description,
        breed: this.state.breed,
        petData: response.data.cats,

      });
      console.log(response.data.cats);
    }).catch(
      error => {
        alert(error.message);
      },
    );
  }
  render() {
    return (
      <>
        <Row xs={1} md={3} className="g-4">
          {this.state.petData.map((obj, idx) => {
            return (
              <>
                <div class="cat">
                  <img src={obj.image_Url} alt="Avatar" class="image" />
                  <div class="overlay">
                    <div class="text">{obj.breed}
                      <br></br><Button onClick={() => {
                        this.ClickNow(obj.breed);
                        
                      }}>More Information</Button>{' '}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <SelectedPets
                  breed={this.state.selected.breed}
                  Age={this.state.selected.age}
                  gender={this.state.selected.gender}
                  description={this.state.selected.description}
                  Image_Url={this.state.selected.image_Url}
                  shows={this.state.Show}
                  HideModal={this.hideModal}
                />
          
          {console.log(this.state.Show)}
          </Row>
      </>
    );
  }
}
export default Cats;
