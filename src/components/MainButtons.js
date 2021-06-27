import React, { Component } from 'react';
import { Button, Col, Row, Container, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export class MainButtons extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <ToggleButtonGroup type="checkbox" >
              <ToggleButton value={1}>Show Pets</ToggleButton>
              <ToggleButton value={2}>Add Pets</ToggleButton>
              <ToggleButton value={3}>Sign Up</ToggleButton>
            </ToggleButtonGroup>

          </Row>
        </Container>
      </>
    );
  }
}

export default MainButtons;
