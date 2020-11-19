import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import InstructorClassList from './InstructorClassList';
import EditClass from './EditClass';
import Course from './InstructorClass';
import AllClasses from '../AllClasses';

const InstructorHome = () => {
    const { push } = useHistory(); 
    const id = localStorage.getItem('instructor_id');

    // const [editing, setEditing] = useState(false);
    const [myClasses, setMyClasses] = useState([]);
    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        getMyClasses();
        getAllClasses();
    },[])

    const getMyClasses = () => {
        axiosWithAuth()
            .get(`/instructors/${id}/classes`)
            .then(res => {
                console.log(res.data)
                setMyClasses(res.data)
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
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='Home'>
            <h2>My Classes</h2>
            <InstructorClassList myClasses={myClasses}/>

            <h2>All Classes</h2>
            <AllClasses allClasses={allClasses}/>
        </div>
    )
}

export default InstructorHome;