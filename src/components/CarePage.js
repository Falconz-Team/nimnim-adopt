import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './care-page-style.css';
import Image from 'react-bootstrap/Image';


export class CarePage extends Component {

  render() {
    return (
      <div class="AllPage1">

        <div class="AllPage2">
          <div className='all-cards pt-5 mt-5'>
            <div className='container'>
              <div className='row row-cols-2 '>
                <div className='col1'>

                  <h3 className='pt-5  mt-5  '>Guide for Taking Care of Animals</h3>

                  <p>Bringing a new pet into your house can be as intimidating as it is exciting. Even if you already have an animal or two at home, taking care of animals often comes along with plenty of questions.

                    As pet owners, we all want the best for our smallest and sometimes, furriest family members. It is important for every pet parent caring for animals that they are getting everything they need to be happy and healthy pets. Taking care of animals is more than just making sure their bowl is full or that the dog is walked, and the litter box is scooped.

                    We put together a few tips for taking care of animals, focusing on the most common household pets.</p>

                  <br></br>

                  <h3>Tips for Taking Care of Animals</h3>

                  <ul>
                    <li>Select a pet that is suited to your home and lifestyle and avoid impulsive decisions.</li>
                    <li>Recognize that owning a pet(s) requires an investment of time and money.</li>
                    <li>Keep only the type and number of pets for which you can provide an appropriate and safe environment. This includes appropriate food, water, shelter, health care, and companionship.</li>
                  </ul>

                  <br></br>


                </div>
                <div className='col'>
                  <div className='container'>
                    <Image className='chart' src="https://fv2-1.failiem.lv/thumb_show.php?i=ufmjsf8mz&view" rounded />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className='h2'>Adoption Stories</h2>

            <div className='all-cards'>
              <div className='container'>
                <div className='row row-cols-2 '>
                  <div className='col'>
                    <Image className="first-img" src="https://images.unsplash.com/photo-1553322396-0c9cd410975e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" rounded />

                  </div>
                  <div className='col'>
                    <h3 className='  mt-5 '>1- Barry</h3>

                    <br></br>

                    <p >
                      We went to Animal Humane Society We thought the process would take a while to find a pet that fit with our family,
                      but we met Barry that very first night.
                      our son Paul exclaimed (with his arms wrapped around our new dog), “I can’t believe how happy I am!”

                      <br></br>

                      - Kristin

                    </p>
                  </div>
                </div>
              </div>
            </div>



            <div className='all-cards'>
              <div className='container'>
                <div className='row row-cols-2 '>
                  <div className='col'>
                    <Image className="second-img" src="https://images.unsplash.com/photo-1555955924-a8c17aa846b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" rounded />


                  </div>
                  <div className='col'>
                    <h3 className=' mt-5 '>2- Sammy</h3>

                    <br></br>

                    <p >
                      Our lives were full until we adopted our cat.
                      We adore her and can't imagine life without her.
                      I hate to think what her life was like before us. But now she knows only love.
                      Thank you so much for everything you did to give the Unloved a second chance.

                      <br></br>

                      - Jessica

                    </p>
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

export default CarePage;