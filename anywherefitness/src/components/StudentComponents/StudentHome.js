import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import StudentClassList from './StudentClassList';
import AllClasses from '../AllClasses';

const StudentHome = () => {
    const { push } = useHistory(); 
    const id = localStorage.getItem('student_id');

    const [myClasses, setMyClasses] = useState([]);
    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        getMyClasses();
        getAllClasses();
    },[])

    const getMyClasses = () => {
        axiosWithAuth()
            .get(`/students/${id}/classes`)
            .then(res => {
                console.log(res.data)
                setMyClasses(res.data)
                // push('/student_home')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getAllClasses = () => {
        axiosWithAuth()
            .get('/classes')
            .then(res => {
                console.log(res.data)
                setAllClasses(res.data)
                // push('/student_home')
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    return (
        <div className='Home'>
            <h2>My Classes</h2>
            <StudentClassList myClasses={myClasses}/>

            <h2>All Classes</h2>
            <AllClasses allClasses={allClasses}/>

        </div>
    )
}

export default StudentHome;