// Dependencies Imports
import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';


// File Imports
import './App.css';
import schema from './validation/Schema';
import logo from './Anywhere Fitness.svg';
// import arrows from './data/constants';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';


export default function App() {
  
  const { push } = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='App-logo' alt='logo' />
      </header>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
  );
}


