import { axiosWithAuth } from '../utils/axiosWithAuth';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 2 characters long"),
    
    email: yup
      .string()
      .email('Must be valid email address')
      .required('Must include email address'),
      
    password: yup
      .string()
      .min(8, 'Must must be at least 8 characters long')
      .required('Must be valid password'),
    
    terms: yup.boolean(),
    check: yup.boolean(),
    });

export default function SignUpForm(props) {

    const { push } = useHistory();
    
    const [initialFormValues, setInitialFormValues] = useState(
        {
            // Text inputs
            name: '',
            email: '',
            password: '',
          
          }
    );
        
    
    const [initialFormErrors, setInitialFormErrors] = useState(
        {
            // Text inputs
            name: '',
            email: '',
            password: '',
          
          }
    );
    
    const [initialDisabled, setInitialDisabled] = useState(true);

    const onSubmit = (evt) => {
      evt.preventDefault();

        axiosWithAuth()
          .post('https://back-end-active-fitness.herokuapp.com/api/students/new', initialFormValues)
          .then((res) => {
            push()
          })
          .catch((err) => {
            console.log(err);
          });
    };

    const onChange = (evt) => {
    const { name, value } = evt.target;
    setInitialFormErrors(name, value);
    setInitialFormValues({...initialFormValues, [evt.target.name]: evt.target.value})
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
    schema.isValid(initialFormValues).then((valid) => {
      setInitialDisabled(!valid);
    });
  }, [initialFormValues]);
  

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h1>Sign Up</h1>

                <div className='form-group inputs'>
                    <label>
                    Name&nbsp;
                        <input 
                        value={initialFormValues.student_name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        />
                    </label>
                    <label>
                    Email
                        <input 
                        value={initialFormValues.student_email}
                        onChange={onChange}
                        name='email'
                        type='text'
                        />
                    </label>
                    <label>
                    Password
                        <input 
                        value={initialFormValues.student_password}
                        onChange={onChange}
                        name='password'
                        type='text'
                        />
                    </label>
         
                </div>
                <button disabled={initialDisabled}>Sign Up</button>
            </div>
        </form>
    )
}

