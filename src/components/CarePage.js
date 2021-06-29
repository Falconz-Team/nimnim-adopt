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

            {/* <h3>How to take care of domestic animals</h3>

          <h5>Dogs</h5>

          <p><h6>Food:</h6> Whether you’re bringing home a new puppy or taking care of a well-aged companion, be sure to stock up on high-quality dog food.  puppies typically need three to four meals per day, but once your dog reaches about one year of age, one meal of day is usually enough Fresh, clean water should always be available also.</p>
          <p><h6>Environment:</h6> It’s important to maintain a safe environment. When caring for animals that will be staying outdoors, you’ll need some sort of temperature control system to ensure they remain comfortable. Dogs need exercise to burn calories, stimulate their minds, and stay healthy and tend to help them avoid boredom. And make room for regular grooming.</p>
          <p><h6>Veterinary Care:</h6> Puppies should have their first visit to the veterinarian when they’re around three weeks old. You should expect a physical exam and testing for worms. This is also a good time to discuss vaccinations and determining when to spay or neuter. </p>

          <br></br>

          <h5>Cats</h5>

          <p><h6>Food:</h6> Whether you have a kitten or a cat, investing in high-quality food is important. How much food you give your cat will depend on the age of your animal and their current activity level. No matter the feeding schedule, make sure fresh, clean water is always available.</p>
          <p><h6>Environment:</h6> Though some pet owners allow their cats to roam the neighborhood, it’s recommended you that when caring for animals like cats, you keep them. They are not harmed physically or behaviorally if they do not get outside. You’ll need a litter box, cat toys, nail clippers, and a scratching post. Many cats enjoy being brushed and regular grooming can help minimize hairballs.</p>
          <p><h6>Veterinary Care:</h6>  Whether you’re bringing up a kitten or adopting an older cat, be sure to visit the veterinarian soon after you bring a furry friend home to check for worms and make sure you get vaccinations in order. Cats should be taken in for regular check-ups at least once each year These routine visits are meant to ensure your cat stays healthy, and they usually only take about 30 minutes.</p>

        </div>

        <div>

          <h2>Share Your Story</h2> */}

            <br></br>

            {/* <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src="https://assets.animalhumanesociety.org/animalhumanesociety.org/files/styles/scale_width_960/public/media/image/2019-10/Barry_.jpg?itok=nnW9pJWa" rounded />
              </Col>
            </Row>
          </Container> */}






            {/* <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src="https://assets.animalhumanesociety.org/animalhumanesociety.org/files/styles/scale_width_960/public/media/image/2019-10/axel_1_cropped.jpg?itok=xMHXXdvp" rounded />
              </Col>
            </Row>
          </Container>

          <br></br>

          <h3>3- Axel</h3>

          <br></br>

          <p>

            We ended up visiting Animal Humane Society
            as I was walking in, I saw and older German Shepherd and I felt an automatic connection with him! I asked his age and how long he had been there.
            I was told he was 9 years old and had just arrived. I asked immediately to meet with him.
            I absolutely fell in love with him. His demeanor, personality, and his very kind eyes.
            Although he has some health problems he was perfect!
            I can’t see our lives without him anymore we have been blessed.

            <br></br>

            - Lydia

          </p>

          <br></br>

          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src="data:image/jpeg;base64,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" rounded />
              </Col>
            </Row>
          </Container>

          <br></br>

          <h3>4- Buddy</h3>

          <br></br>

          <p>
            I saw him online and it said he had been there for quite some time. He was 4 years old at the time with gentle eyes in his picture. I called the Woodbury shelter and they confirmed he was still there She told me he was such a sweet boy with a sad heart. I knew immediately that he was meant to be ours.
            He is our world and we love him so much. Buddy is very spoiled and we believe he is living his best life with us! We love our senior cat!

            <br></br>

            - Cassie

          </p> */}

          </div>

        </div>
      </div>
    );
  }
}

export default CarePage;