import React, { Component } from 'react';
import { Button, Col, Row, Container, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export class MainButtons extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <div class="btn-group" role="group" aria-label="Basic example">
              <div>
                <button type="button" class="btn btn-secondary shadow p-2 mb-4 mr-1 btn-lg">ADD PETS</button>
              </div>
              <div>
                <button type="button" class="btn btn-secondary shadow p-2 mb-4  ml-1 btn-lg color-btn">SHOW PETS</button>
              </div>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default MainButtons;

