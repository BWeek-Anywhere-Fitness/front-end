import React from 'react';

export function StudentSignUpForm(props) {
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
    const { name, value, checked, type } = evt.target;
    const correctValue = type === "checkbox" ? checked : value;
    change(name, correctValue);
    };

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h1>Sign Up</h1>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>

                <div className='form-group inputs'>
                    <label>
                    Name&nbsp;
                        <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        />
                    </label>
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
                    <label>
                    Must Agree to Terms of Service
                        <input 
                        value={values.terms}
                        onChange={onChange}
                        name='terms'
                        type='checkbox'
                        />
                    </label>
                </div>
                <button disabled={disabled}>Sign Up</button>
            </div>
        </form>
    )
}

export function InstructorSignUpForm(props) {
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
    const { name, value, checked, type } = evt.target;
    const correctValue = type === "checkbox" ? checked : value;
    change(name, correctValue);
    };

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h1>Sign Up</h1>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>

                <div className='form-group inputs'>
                    <label>
                    Name&nbsp;
                        <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        />
                    </label>
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
                    <label>
                    Must Agree to Background Check
                        <input 
                        value={values.check}
                        onChange={onChange}
                        name='check'
                        type='checkbox'
                        />
                    </label>
                    <label>
                    Must Agree to Terms of Service
                        <input 
                        value={values.terms}
                        onChange={onChange}
                        name='terms'
                        type='checkbox'
                        />
                    </label>
                </div>
                <button disabled={disabled}>Sign Up</button>
            </div>
        </form>
    )
}