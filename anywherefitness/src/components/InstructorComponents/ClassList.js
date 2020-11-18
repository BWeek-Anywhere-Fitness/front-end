import React from 'react';
import { Link } from 'react-router-dom';
import InstructorClassCard from './ClassCard';

function InstructorClassList({ classes }) {
    return (
      <div className="classList">
        {
          classes.map(cls => (
            <Link key={cls.id} to={`/classes/${cls.id}`}>
              <InstructorClassCard cls={cls} />
            </Link>
          ))
        }
      </div>
    );
  }
  
  export default InstructorClassList;