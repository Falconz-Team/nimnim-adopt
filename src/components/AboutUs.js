import React, { Component } from 'react';
import { Col, Row} from 'react-bootstrap';
import './about-us.css';

export class AboutUs extends Component {
  render() {
    return (
      <div className="big-container">
        <div className="team-boxed">
          <div class="container">
            <Row>

              <div class="intro">
                <h2 class="text-center title-style">The Falcons</h2>
                <p class="text-center font-color">"It Takes Nothing Away From A Human To Be Kind To An Animal"</p>
              </div>

              <Row>
                <Col className="item">
                  <div className="box">
						  <img class="rounded-circle" src="https://i.pinimg.com/564x/8c/93/12/8c9312509ade368a38c1e168da0d0d2b.jpg" alt="Saleh"/>
                    <h3 class="name">Saleh Radwan</h3>
                    <p class="title">Full-Stack Software Developer</p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                  </div>
                </Col>	
				<Col className="item">
				<div className="box">
						  <img class="rounded-circle" src="https://i.pinimg.com/564x/8c/93/12/8c9312509ade368a38c1e168da0d0d2b.jpg" alt="Saleh"/>
                    <h3 class="name">Saleh Radwan</h3>
                    <p class="title">Full-Stack Software Developer</p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                  </div>
				</Col>
				<Col className="item">
				<div className="box">
						  <img class="rounded-circle" src="https://i.pinimg.com/564x/8c/93/12/8c9312509ade368a38c1e168da0d0d2b.jpg" alt="Saleh"/>
                    <h3 class="name">Saleh Radwan</h3>
                    <p class="title">Full-Stack Software Developer</p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                  </div>
				</Col>
				<Col className="item">
                  <div className="box">
						  <img class="rounded-circle" src="https://i.pinimg.com/564x/8c/93/12/8c9312509ade368a38c1e168da0d0d2b.jpg" alt="Saleh"/>
                    <h3 class="name">Saleh Radwan</h3>
                    <p class="title">Full-Stack Software Developer</p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                  </div>
                </Col>	
				</Row>
				<Row>
				<Col className="item">
				<div className="box">
						  <img class="rounded-circle" src="https://i.pinimg.com/564x/8c/93/12/8c9312509ade368a38c1e168da0d0d2b.jpg" alt="Saleh"/>
                    <h3 class="name">Saleh Radwan</h3>
                    <p class="title">Full-Stack Software Developer</p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                  </div>
				</Col>
				<Col className="item">
				<div className="box">
						  <img class="rounded-circle" src="https://i.pinimg.com/564x/8c/93/12/8c9312509ade368a38c1e168da0d0d2b.jpg" alt="Saleh"/>
                    <h3 class="name">Saleh Radwan</h3>
                    <p class="title">Full-Stack Software Developer</p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                  </div>
				</Col>
				<Col className="item">
				<div className="box">
						  <img class="rounded-circle" src="https://i.pinimg.com/564x/8c/93/12/8c9312509ade368a38c1e168da0d0d2b.jpg" alt="Saleh"/>
                    <h3 class="name">Saleh Radwan</h3>
                    <p class="title">Full-Stack Software Developer</p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                  </div>
				</Col>
				</Row>

            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;