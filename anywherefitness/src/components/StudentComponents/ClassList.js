import React from 'react';
import { Link } from 'react-router-dom';
import StudentClassCard from './ClassCard';

function StudentClassList({ classes }) {
    return (
      <div className="classList">
        {
          classes.map(cls => (
            <Link key={cls.id} to={`/classes/${cls.id}`}>
              <StudentClassCard cls={cls} />
            </Link>
          ))
        }
      </div>
    );
  }
  
  export default StudentClassList;