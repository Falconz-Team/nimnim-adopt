import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';

export class Dogs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      serverUrl: process.env.REACT_APP_SERVER_URL,
      image_Url: '',
      petData: [],
    };
  }
  componentDidMount = () => {
    axios.get(`${this.state.serverUrl}/pets`).then((response, idx) => {

      this.setState({
        image_Url: this.state.image_Url,
        petData: response.data.dogs,

      });
      console.log(response.data.dogs);
    }).catch(
      error => {
        alert(error.message);
      },
    );
  }
  render() {
    return (
      <Container>
        <Row xs={1} md={3} className="g-4">
          {this.state.petData.map((obj, idx) => {
            return (
              <Image to = "/AddPets" src={obj.image_Url} thumbnail />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Dogs;
