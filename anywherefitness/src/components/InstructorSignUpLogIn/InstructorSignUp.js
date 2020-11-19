import axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
    instructor_name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 2 characters long"),
    
    instructor_email: yup
      .string()
      .email('Must be valid email address')
      .required('Must include email address'),
      
    instructor_password: yup
      .string()
      .min(8, 'Must must be at least 8 characters long')
      .required('Must be valid password'),
    });


    const initialFormValues = {
      instructor_name: '',
      instructor_email: '',
      instructor_password: ''
  }

  const initialFormErrors = {
      instructor_name: '',
      instructor_email: '',
      instructor_password: ''
  }

export default function SignUpForm() {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    
    const [initialDisabled, setInitialDisabled] = useState(true);

    const onSubmit = (evt) => {
      evt.preventDefault();
        console.log('this is working', formValues);
        axios
        .post('https://back-end-active-fitness.herokuapp.com/api/instructors/new', formValues)  
        .then((res) => { 
            setFormValues(initialFormValues)
            push('/instructor_login') // Routes to instructor main menu
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
                        value={formValues.instructor_name}
                        onChange={onChange}
                        name='instructor_name'
                        type='text'
                        />
                    </label>
                    <label>
                    Email
                        <input 
                        value={formValues.instructor_email}
                        onChange={onChange}
                        name='instructor_email'
                        type='text'
                        />
                    </label>
                    <label>
                    Password
                        <input 
                        value={formValues.instructor_password}
                        onChange={onChange}
                        name='instructor_password'
                        type='text'
                        />
                    </label>
         
                </div>
                <button disabled={initialDisabled}>Sign Up</button>
            </div>
        </form>
    )
}