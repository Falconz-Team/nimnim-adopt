import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ShowPets from './components/ShowPets';
import AddPets from './components/AddPets';
import ShowCategory from './components/ShowCategory';
import CarePage from './components/CarePage';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
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
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;


