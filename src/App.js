import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ShowPets from './components/ShowPets';
import AddPets from './components/AddPets';
import ShowCategory from './components/ShowCategory';
import CarePage from './components/CarePage';
import AboutUs from './components/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cats from './components/Cats';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dogs from './components/Dogs';
import Birds from './components/Birds';
import Other from './components/Other';


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* <Header /> */}
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/ShowPets">
              <ShowPets />
            </Route>
            <Route path="/AddPets">
              <AddPets />
            </Route>
            <Route path="/ShowCategory">
              <ShowCategory />
            </Route>
            <Route path="/CarePage">
              <CarePage />
            </Route>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
          </Switch>
          {/* <Footer /> */}
        </Router>
        <Router>
          <Switch>
            <Route path="/Cats" exact>
              <Cats />
            </Route>
            <Route path="/Dogs" exact>
              <Dogs />
            </Route>
            <Route path="/Birds" exact>
              <Birds />
            </Route>
            <Route path="/Other" exact>
              <Other />
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;


