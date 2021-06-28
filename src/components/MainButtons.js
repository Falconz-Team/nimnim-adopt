import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

export class MainButtons extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <div class="btn-group" role="group" aria-label="Basic example">
              <div>
                <Link to="/AddPets">
                  <button type="button" class="btn btn-secondary shadow p-2 mb-4 mr-1 btn-lg">ADD PETS</button> </Link>
              </div>
              <div>
                <Link to="/ShowCategory">
                  <button type="button" class="btn btn-secondary shadow p-2 mb-4  ml-1 btn-lg color-btn">SHOW PETS</button> </Link>
              </div>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default MainButtons;

