import React, { Component } from 'react';
import { Carousel} from 'react-bootstrap';
import './about-us.css';

export class AboutUs extends Component {
  render() {
    return (
      <div className="bag-image">
        <div class="team-boxed">
          <div class="container">
            <div class="row people">

              <div class="intro">
                <h2 class="text-center title-style">The Falcons</h2>
                <p class="text-center font-color">"It Takes Nothing Away From A Human To Be Kind To An Animal"</p>
              </div>

              <div class="row people justify-content-md-center">

                <div class="col-md-6 col-lg-4 item">
                  <div class="box">
						  <img class="rounded-circle" src="https://i.pinimg.com/564x/8c/93/12/8c9312509ade368a38c1e168da0d0d2b.jpg" alt="Saleh"/>
                    <h3 class="name">Saleh Radwan</h3>
                    <p class="title">Full-Stack Software Developer</p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                  </div>
                </div>
					
				  </div>

              <div class="row people">

                <div class="col-md-6 col-lg-4 item">
                  <div class="box">
						  <img class="rounded-circle" src="https://i.pinimg.com/originals/90/29/81/9029819d281f6008055e931cb29d7b5b.png" alt="Mohammad"/>
                    <h3 class="name">Mohammad Jebreen</h3>
                    <p class="title">Full-Stack Software Developer</p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 item">
                  <div class="box">
						  <img class="rounded-circle" src="https://i.pinimg.com/564x/99/73/8f/99738f7583971a0eae9d3c196ea8edc4.jpg" alt="Mahmoud"/>
                    <h3 class="name">Mahmoud Salameh</h3>
                    <p class="title">Full-Stack Software Developer</p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                  </div>
                </div>	

				  <div class="col-md-6 col-lg-4 item">
                  <div class="box">
						  <img class="rounded-circle" src="https://i.pinimg.com/564x/76/fb/b4/76fbb4f1fd098ac6aabf3e5ac86cabb8.jpg" alt="Samer"/>
                    <h3 class="name">Samer Odeh</h3>
                    <p class="title">Full-Stack Software Developer</p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                  </div>
                </div>

				  </div>


              <div class="row people">

                <div class="col-md-6 col-lg-4 item">
                  <div class="box">
						  <img class="rounded-circle" src="https://i.pinimg.com/564x/05/1e/4d/051e4d5ce8cf3005c2fd8d4656c0f29a.jpg" alt="Rawan"/>
                    <h3 class="name">Rawan Khasawneh</h3>
                    <p class="title">Full-Stack Software Developer</p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 item">
                  <div class="box">
						  <img class="rounded-circle" src="https://i.pinimg.com/564x/b4/d5/22/b4d522988ad442846d3c5ce60b943854.jpg" alt="Shahd"/>
                    <h3 class="name">Shahd Jalam</h3>
                    <p class="title">Full-Stack Software Developer</p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                  </div>
                </div>	

				  <div class="col-md-6 col-lg-4 item">
                  <div class="box">
						  <img class="rounded-circle" src="https://i.pinimg.com/564x/30/5b/9b/305b9b90d4e442e908d6a48ce395bd87.jpg" alt="Miral" />
                    <h3 class="name">Miral Alabdullah</h3>
                    <p class="title">Full-Stack Software Developer</p>
                    <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                  </div>
                </div>
					
				  </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;