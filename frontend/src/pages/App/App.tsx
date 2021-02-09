import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../Home/Home'
import Signin from '../Signin/Signin'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import Foods from '../Foods/Foods';
import Waiting2 from '../Waiting/Waiting';
import { AuthContext } from '../../context/AuthContext';
import Profile from '../Profile/Profile';

function App() {
  const AuthCtx:any = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/signin">{AuthCtx.auth.isUser ? <Redirect to="/profile"/> : <Signin /> }</Route>
        <Route path="/waiting">{AuthCtx.auth.isUser ? <Waiting2 /> : <Redirect to="/signin"/> }</Route>
        <Route path="/foods">{AuthCtx.auth.isUser ? <Foods /> : <Redirect to="/signin"/> }</Route>
        <Route path="/profile">{AuthCtx.auth.isUser ?  <Profile />  : <Redirect to="/signin"/> }</Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
