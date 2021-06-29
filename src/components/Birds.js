import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import './ShowPets.css';
import SelectedPets from './SelectedPets';


export class Birds extends Component {
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
      selected:''
    };
  }
  hideModal = () => {
    this.setState({ Show: !this.state.Show });
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

  componentDidMount = () => {
    axios.get(`${this.state.serverUrl}/pets`).then((response, idx) => {

      this.setState({
        image_Url: this.state.image_Url,
        description: this.state.description,
        breed: this.state.breed,
        petData: response.data.birds,

      });
      console.log(response.data.birds);
    }).catch(
      error => {
        alert(error.message);
      },
    );
  }
  render() {
    return (
      <div class = 'modelpets'>
        <Row xs={1} md={3} className="g-4" style={{marginTop:'80px'}}>
          {this.state.petData.map((obj, idx) => {
            return (
              <>
                <div class="cat" >
                  <img style={{height:'460px'}}  src={obj.image_Url} alt="Avatar" class="image" />
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
                  Show={this.state.Show}
                  hideModal={this.hideModal}
                />
          
          {console.log(this.state.Show)}
          </Row>
      </div>
    );
  }
}
export default Birds;