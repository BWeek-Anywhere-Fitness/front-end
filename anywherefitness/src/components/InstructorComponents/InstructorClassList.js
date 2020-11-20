import React from 'react';
import { Link } from 'react-router-dom';
import InstructorClassCard from './InstructorClassCard';

function InstructorClassList({ myClasses }) {
  console.log("myClasses", myClasses)
    return (
      <div className="classList">
        {
          myClasses.map(cls => (
            <Link key={cls.id} to={`/classes/${cls.id}`}>
              <InstructorClassCard cls={cls} />
              {console.log("cls", cls)}
            </Link>
          ))
        }
      </div>
    );
  }
  
  export default InstructorClassList;