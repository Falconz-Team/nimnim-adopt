import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import MainButtons from './MainButtons';
// import Button from 'react-bootstrap/Button';


export class ShowCategory extends Component {
  render() {

    return (
      <div>
        {/* <Button href="/ShowPets">Show Pets</Button>{' '}  */}
				 <Carousel fade={true} controls={false}>
          <Carousel.Item interval={1000}>
            <a href="/cats"><img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1596710104472-32ce1fb38f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              
              alt="First slide"
            /></a> 
            <Carousel.Caption>
              <h1 className='font-family'>
								CATS
              </h1>
              <div>
                <MainButtons />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <a href="/Dogs"> <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Second slide"
            /></a> 
            <Carousel.Caption>
              <h1 className='font-family'>
								DOGS
              </h1>
              <div>
                <MainButtons />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <a href="/Birds"><img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1480044965905-02098d419e96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="Third slide"
            /></a>
            <Carousel.Caption>
              <h1 className='font-family'>
								BIRDS
              </h1>
              <div>
                <MainButtons />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <a href="/Other"> <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
              alt="Third slide"
            /></a>
            <Carousel.Caption>
              <h1 className='font-family'>
								OTHER
              </h1>
              <div>
                <MainButtons />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel >
      </div>
    );
  }
}

export default ShowCategory;