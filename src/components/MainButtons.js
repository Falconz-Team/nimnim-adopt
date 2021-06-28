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
                <Link to="/Addpets">
                  <button type="button" class="btn-pets">ADD PETS</button>
                </Link>
              </div>
              <div>
                <Link to="/ShowCategory">
                  <button type="button" class="btn-pets">SHOW PETS</button>
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default MainButtons;

