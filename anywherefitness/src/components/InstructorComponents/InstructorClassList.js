import React from 'react';
import { Link } from 'react-router-dom';
import InstructorClassCard from './InstructorClassCard';

function InstructorClassList({ myClasses }) {

    return (
      <div className="classList">
        {
          myClasses.map(cls => (
            <Link key={cls.id} to={`/classes/${cls.id}`}>

              {/* <InstructorClassCard cls={cls} /> */}
              <h2>{cls.class_name}</h2>
              <p>instructor: {cls.instructor_name}</p>
              <p>type: {cls.class_type}</p>
              <p>start: {cls.class_start}</p>
              <p>duration: {cls.class_duration}</p>
              <p>intensity: {cls.class_intensity}</p>
              <p>location; {cls.class_location}</p>
              {console.log('ClassList cls', cls)}
            </Link>
          ))
        }
      </div>
    );
  }
  
  
  export default InstructorClassList;