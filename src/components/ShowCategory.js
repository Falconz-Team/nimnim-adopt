import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Show-catogety.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

            <p>Adoption is owning a pet and taking responsibility for it by adopting it from an animal  <br></br> shelter or from its old owner or by saving it yourself instead of buying it.
              <br></br>
              <br></br>
              The animals available for adoption are no less beautiful and energyless <br></br> than the animals offered for sale.
              <br></br>
              <br></br>
              And perhaps the animals available for adoption will be in better health <br></br> since there is someone who takes care of them.
              <br></br>
              <br></br>
              Many animal rescuers are also more grateful to their adopters.</p>

            {/* <br></br> */}
          </div>
        </div>


        <div className='all-cards'>
          <div className='container'>
            <div className='row row-cols-6'>
              <div className='col mb-5'>
                {/* <Button class="ToLearn" variant="info"href="/CarePage">To learn more </Button> */}
                <Link to="/CarePage">
                  <button class="to-learn" type="button">To learn more</button>
                </Link>
              </div>
            </div>

            <>
              <div class="Pets" >
                <h2>Pets Category</h2>
              </div>
              <br></br>
              <div class="AnimalsCategory">

                <img src="https://images.unsplash.com/photo-1596710104472-32ce1fb38f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="Avatar" class="image1" />

                <div class="overlay1">
                  <div class="text1">{ }
                    <Link to="/Cats">
                      <button class="button" type="button">Cats</button>
                    </Link>
                  </div>
                </div>
              </div>
            </>

            <>
              <div class="AnimalsCategory">
                <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Avatar" class="image1" />
                <div class="overlay1">
                  <div class="text1">{ }
                    <Link to="/Dogs">
                      <button class="button" type="button">Dogs</button>
                    </Link>
                  </div>
                </div>
              </div>
            </>

            <>
              <div class="AnimalsCategory">
                <img src="https://images.unsplash.com/photo-1480044965905-02098d419e96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Avatar" class="image1" />
                <div class="overlay1">
                  <div class="text1">{ }
                    <Link to="/Birds">
                      <button class="button" type="button">Birds</button>
                    </Link>
                  </div>
                </div>
              </div>
            </>

            <>
              <div class="AnimalsCategory">
                <img src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" alt="Avatar" class="image1" />
                <div class="overlay1">
                  <div class="text1">{ }
                    <Link to="/Other">
                      <button class="button" type="button">Other</button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCategory;