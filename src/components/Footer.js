import React from 'react';
import { Container, Col, Nav, Row } from 'react-bootstrap';
import './footer.css';

export class Footer extends React.Component {
  render() {
    return (
      <>
        <footer class=" text-center text-white position-footer">
          <div className="margin-bottom">
            <div class="container p-4 pb-0">
              <section class="mb-4">
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fa fa-facebook-f"></i
                  ></a>

                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fa fa-twitter"></i
                  ></a>

                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fa fa-google"></i
                  ></a>

                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fa fa-instagram"></i
                  ></a>

                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fa fa-github"></i
                  ></a>
              </section>
            </div>
		  </div>
		  <div className="footer-top">
            <div class="text-center">
			  All Rights Are Reserved : &#169; 2021 The Falcons
            </div>
		  </div>
        </footer>
      </>
    );
  }
}

export default Footer;
