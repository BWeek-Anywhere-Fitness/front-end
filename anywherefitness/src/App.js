// Dependencies Imports
import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';


// File Imports
import './App.css';
import schema from './validation/Schema';
import logo from './Anywhere Fitness.svg';
import arrows from './data/constants';
import Login from './components/Login';
import { StudentSignUpForm, InstructorSignUpForm } from './components/SignUp'


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

  const history = useHistory();

  const routeToLogin = () => {
    history.push('/login');
  };

  const routeToStudentSU = () => {
    history.push('/student-suhp');
  };

  const routeToInstructorSU = () => {
    history.push('/instructor-suhp');
  };

  const postNewUser = (newUser) => {
    axios
      .post('', newUser)
      .then((res) => {
        setUser([res.data, ...user]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
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
      {/* will contain two sections for user to sign in depending on their status */}
      <div className='content-container'>
        {/* suhp = sign up home page */}
        <div className='student-signup-section' id='student-suhp'>
          <h2>Student</h2>
          <p>As a student, you will be able to search and sign up for fitness classes based on location, skill level, and preferred work out type.</p>
          <button onClick={routeToStudentSU} className='btn-to-student-suhp'>
              Sign Up
            </button>
            <button onClick={routeToLogin} className='btn-to-login'>
              Login
            </button>
        </div>
        <div className='instrutor-signup-section' id='instructor-suhp'>
          <h2>Instructor</h2>
          <p>As an instructor, you will be able to manage and post the location of your fitness classes for others to join, manage clients attendance, and receive payment for classes.</p>
          <button onClick={routeToInstructorSU} className='btn-to-instructor-suhp'>
              Sign Up
            </button>
            <button onClick={routeToLogin} className='btn-to-login'>
              Login
            </button>
        </div>
        <Switch>
          <Route path='/login'>
            <Login
            values={formValues}
            submit={formSubmit}
            change={inputChange}
            disabled={disabled}
            errors={formErrors}
            />
          </Route>
          <Route path='/instructor-suph'>
            <InstructorSignUpForm
            values={formValues}
            submit={formSubmit}
            change={inputChange}
            disabled={disabled}
            errors={formErrors}
            />
          </Route>
          <Route path='/client-suph'>
            <StudentSignUpForm
            values={formValues}
            submit={formSubmit}
            change={inputChange}
            disabled={disabled}
            errors={formErrors}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}


