import React from 'react';
import { Link } from 'react-router-dom';
import StudentClassCard from './StudentComponents/StudentClassCard';

function AllClasses({ allClasses }) {
    return (
      <div className="classList">
        {
          allClasses.map(cls => (
            <Link key={cls.id} to={`/classes/${cls.id}`}>
              <StudentClassCard cls={cls} />
            </Link>
          ))
        }
      </div>
    );
  }
  
export default AllClasses;