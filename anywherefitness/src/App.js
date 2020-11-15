// Dependencies Imports
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';


// File Imports
import './App.css';
import schema from './Schema';
import logo from './Anywhere Fitness.svg';
import arrows from './data/constants';


// Initial states
const initialFormValues = {
  // Text inputs
  name: '',
  email: '',
  password: '',

  // Checkboxes
  terms: false,
  check: false,
};

//   
const 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      {/* will contain two sections for user to sign in depending on their status */}
      <div className='content-container'>
        {/* suhp = sign up home page */}
        <div className='client-signup-section' id='client-suhp'>
          <h2>Client</h2>
          <p>As a client, you will be able to search and sign up for fitness classes based on location, skill level, and preferred work out type.</p>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
        <div className='instrutor-signup-section' id='instructor-suhp'>
          <h2>Instructor</h2>
          <p>As an instructor, you will be able to manage and post the location of your fitness classes for others to join, manage clients attendance, and receive payment for classes.</p>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
