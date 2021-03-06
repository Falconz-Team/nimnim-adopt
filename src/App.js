import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
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
      <div style={{height: '100%'}}>
        <Router>
         <Header />
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/AddPets" exact>
              <AddPets />
            </Route>
            <Route path="/ShowCategory" exact>
              <ShowCategory />
            </Route>
            <Route path="/CarePage" exact>
              <CarePage />
            </Route>
            <Route path="/AboutUs" exact>
              <AboutUs />
            </Route>
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
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;


