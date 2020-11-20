import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudentClassCard from './StudentComponents/StudentClassCard';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function AllClasses({allClasses}) {
  // const [allClasses, setAllClasses] = useState([]);

  // const getAllClasses = () => {
  //   axiosWithAuth()
  //       .get('/classes')
  //       .then(res => {
  //           console.log(res.data)
  //           setAllClasses(res.data)
  //       })
  //       .catch(err => {
  //           console.log(err)
  //       })
  // }

  // useEffect(() => {
  //   getAllClasses();
  // },[])

    return (
      <div className="classList">
        {
          allClasses.map(cls => (
            // <Link key={cls.id} to={`/classes/${cls.id}`}>
              <StudentClassCard cls={cls} />
            // </Link>
          ))
        }
      </div>
    );
  }
  
export default AllClasses;