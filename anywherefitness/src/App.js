// Dependencies Imports
import React, { useState, useEffect } from 'react';
import { Route, Switch, } from 'react-router-dom';
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
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
};

const initialDisabled = true;

const userInitialValue = [];

export default function App() {

  const [user, setUser] = useState(userInitialValue);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // const formOnChange = (name, value) => {
  //   setFormValues({ ...formValues, [name]: value });
  // }
  
  // const formSubmit = () => {
  //   setUser([ ...user, formValues]);
  //   setFormValues(initialFormValues);
  // }

  const postNewStudent = (newUser) => {
    axios
      .post('https://back-end-active-fitness.herokuapp.com/api/students/new', newUser)
      .then((res) => {
        setUser([res.data, ...user]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formSubmitStudent = () => {
      const newUser = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
      };
      postNewStudent(newUser);
    };
  
  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
        ...formValues,
        [name]: value,
    });
};
  
useEffect(() => {
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  });
}, [formValues]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='App-logo' alt='logo' />
      </header>
        <Switch>
          <Route path='/login'>
            <Login
            values={formValues}
            submit={formSubmitStudent}
            change={inputChange}
            disabled={disabled}
            errors={formErrors}
            />
          </Route>
          <Route path='/signup'>
            <SignUp
            values={formValues}
            submit={formSubmitStudent}
            change={inputChange}
            disabled={disabled}
            errors={formErrors}
            />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
  );
}


