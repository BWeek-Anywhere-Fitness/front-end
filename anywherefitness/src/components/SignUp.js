import axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
  student_name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 2 characters long"),

  student_email: yup
    .string()
    .email('Must be valid email address')
    .required('Must include email address'),
  
  student_password: yup
    .string()
    .min(8, 'Must must be at least 8 characters long')
    .required('Must be valid password'),
});

const initialFormValues = {
  student_name: '',
  student_email: '',
  student_password: ''
};

const initialFormErrors = {
  student_name: '',
  student_email: '',
  student_password: ''
};

export default function SignUpForm(props) {

  const { push } = useHistory();

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [initialDisabled, setInitialDisabled] = useState(true);

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post('https://back-end-active-fitness.herokuapp.com/api/students/new', formValues)  
      .then((res) => { 
        setFormValues(initialFormValues)
        push('/student_login')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setFormErrors(name, value);
    setFormValues({...formValues, [evt.target.name]: evt.target.value})
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
  };
    
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setInitialDisabled(!valid);
    });
  }, [formValues]);

  return (
    <form className='form-container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h1>Sign Up</h1>
        <div className='form-group inputs'>
          <label>
            Name&nbsp;
            <input 
              value={formValues.student_name}
              onChange={onChange}
              name='student_name'
              type='text'
            />
          </label>
          <label>
            Email
            <input 
              value={formValues.student_email}
              onChange={onChange}
              name='student_email'
              type='text'
            />
          </label>
          <label>
            Password
            <input 
              value={formValues.student_password}
              onChange={onChange}
              name='student_password'
              type='text'
            />
          </label>
        </div>
          <button disabled={initialDisabled}>Sign Up</button>
      </div>
    </form>
  )
}

