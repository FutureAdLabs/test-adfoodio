import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Signin from '../Signin/Signin'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/signin"><Signin /></Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
