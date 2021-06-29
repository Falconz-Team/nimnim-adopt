import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import MainButtons from './MainButtons';
import './carousel.css';


export class Main extends React.Component {
  render() {
    return (
      <div>
        <Carousel fade={true} controls={false} className="carousel-position">
          <Carousel.Item interval={1000} className="item">
            <Image className="im" src="https://images.unsplash.com/photo-1457410129867-5999af49daf7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" fluid />
          </Carousel.Item>
          <Carousel.Item interval={1000} className="item">
            <Image className="im" src="https://images.unsplash.com/photo-1599184488811-099b1e9aa9be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" fluid />
          </Carousel.Item>
          <Carousel.Item interval={1000} className="item">
            <Image className="im" src="https://images.unsplash.com/photo-1455287278107-115faab3eafa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" fluid />
          </Carousel.Item>
          <Carousel.Item interval={1000} className="item">
            <Image className="im" src="https://images.unsplash.com/photo-1506993708131-b0bf29d16b76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" fluid />
          </Carousel.Item>
        </Carousel >
        <div class="row" className="disc">
           <div class="col-sm" style={{margin: 0, padding: 0, top: 0}}>
             <div>
               <h1 className='font-family'>Nimnim</h1>
               <p className="for-adoption-position">For Adoption</p>
               <p className="margin-top">"Find Me A Home, Find Me A Family"</p>
             </div>
             <div>
               <MainButtons />
             </div>
           </div>
         </div>
      </div>
    );
  }
}

export default Main;
