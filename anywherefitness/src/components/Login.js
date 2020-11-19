import { axiosWithAuth } from '../utils/axiosWithAuth';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
    student_email: yup
      .string()
      .email('Must be valid email address')
      .required('Must include email address'),
      
    student_password: yup
      .string()
      .min(3, 'Must must be at least 3 characters long')
      .required('Must be valid password'),
    });


// Login Form

const initialFormValues = {
    student_name: '',
    student_email: '',
    student_password: '',
}

export default function LoginForm(props) {
const { push } = useHistory();
    
    const [formValues, setFormValues] = useState(initialFormValues)
    const [initialDisabled, setInitialDisabled] = useState(true);
    const [initialFormErrors, setInitialFormErrors] = useState(initialFormValues);
    
    const onSubmit = (evt) => {
      evt.preventDefault();
        console.log('this is working', formValues);
        axiosWithAuth()
            .post('/students/login', formValues)  
            .then((res) => { 
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('student_id', res.data.student_id)
                setFormValues(initialFormValues)
                push('/student_home')
            })
            .catch((err) => {
                console.log(err);
            });
        };

    const onChange = (evt) => {
        const { name, value } = evt.target;
        setInitialFormErrors(name, value);
        setFormValues({...formValues, [evt.target.name]: evt.target.value})
    };
    
    const inputChange = (name, value) => {
      yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
          setInitialFormErrors({
            ...initialFormErrors,
            [name]: '',
          });
        })
        .catch((err) => {
          setInitialFormErrors({
            ...initialFormErrors,
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
        <form className='form-container-login' onSubmit={onSubmit}>
            <div className='form-group-login submit'>
                <h1>Login</h1>
                <div className='form-group-login inputs'>
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
                <button disabled={initialDisabled}>Login</button>
            </div>
        </form>
    )
}