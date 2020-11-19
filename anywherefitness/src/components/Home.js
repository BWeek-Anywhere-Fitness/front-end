import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
    
    const history = useHistory();

    const routeToStudentLogin = () => {
      history.push('/student_login');
    };
  
    const routeToStudentSignUp = () => {
      history.push('/student_signup');
    };

    const routeToInstructorLogin = () => {
      history.push('/instructor_login');
    };
  
    const routeToInstructorSignUp = () => {
      history.push('/instructor_signup');
    };

    return (
        <div className='content-container'>
        {/* suhp = sign up home page */}
        <div className='student-signup-section' id='student-suhp'>
          <h2>Student</h2>
          <p>As a student, you will be able to search and sign up for fitness classes based on location, skill level, and preferred work out type.</p>
          <button onClick={routeToStudentSignUp} className='btn-to-student-suhp'>
              Sign Up
            </button>
            <button onClick={routeToStudentLogin} className='btn-to-login'>
              Login
            </button>
        </div>
        <div className='instrutor-signup-section' id='instructor-suhp'>
          <h2>Instructor</h2>
          <p>As an instructor, you will be able to manage and post the location of your fitness classes for others to join, manage clients attendance, and receive payment for classes.</p>
          <button onClick={routeToInstructorSignUp} className='btn-to-instructor-suhp'>
              Sign Up
            </button>
            <button onClick={routeToInstructorLogin} className='btn-to-login'>
              Login
            </button>
            </div>
    </div>
    )
}