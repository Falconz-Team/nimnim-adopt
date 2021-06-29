import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Show-catogety.css';
import {Card, Button} from 'react-bootstrap';

export class ShowCategory extends Component {
  render() {
    return (
      <div>

        <div className='dog-header'>
        </div>

        
        <div className='about-section about-background'>
          <div className='container'>

            <h1 className='pt-5 pb-5  mb-5'>What is Adoption ?</h1>

            <br></br>

            <p>Adoption is owning a pet and taking responsibility for it by adopting it from an animal shelter or from its old owner or by saving it yourself instead of buying it.
              <br></br>
              The animals available for adoption are no less beautiful and energyless than the animals offered for sale.
              <br></br>
              And perhaps the animals available for adoption will be in better health since there is someone who takes care of them.
              <br></br>
              Many animal rescuers are also more grateful to their adopters.</p>

            <br></br>
          </div>
        </div>


        <div className='all-cards'>
          <div className='container'>
            <div className='row row-cols-6'>
              <div className='col mb-5'>
                <Button variant="info"href="/CarePage">CarePage</Button>
              </div>
            </div>
            <div className='row row-cols-4 '>
              <div className='col'><Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1596710104472-32ce1fb38f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" />
                <Card.Body>
                 
                  <Button variant="info" href="/cats">CATS</Button>
                </Card.Body>
              </Card></div>
              <div className='col'><Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
                <Card.Body>
                 
                  <Button variant="info" href="/Dogs">DOGS</Button>
                </Card.Body>
              </Card></div>
              <div className='col'><Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1480044965905-02098d419e96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                <Card.Body>
                  
                  <Button variant="info" href="/Birds">BIRDS</Button>
                </Card.Body>
              </Card></div>
              <div className='col'><Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" />
                <Card.Body>
                 
                  <Button variant="info" href="/Other">OTHER</Button>
                </Card.Body>
              </Card></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCategory;