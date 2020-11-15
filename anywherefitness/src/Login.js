import React from 'react';

// Login Form
export default function LoginForm(props) {
    const {
        values, 
        submit, 
        change, 
        disabled, 
        errors,
    } = props;

    const onSubmit = (evt) => {
      evt.preventDefault();
      submit();
    };

    const onChange = (evt) => {
    const { name, value, type } = evt.target;
    change(name);
    };

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h1>Login</h1>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.password}</div>
                </div>

                <div className='form-group inputs'>
                    <label>
                    Email
                        <input 
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                        />
                    </label>
                    <label>
                    Password
                        <input 
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                        />
                    </label>
                </div>
                <button disabled={disabled}>Login</button>
            </div>

        </form>
    )
}
