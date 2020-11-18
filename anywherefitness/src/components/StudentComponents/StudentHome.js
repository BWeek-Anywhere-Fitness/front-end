import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import StudentClassList from './StudentClassList';

const StudentHome = () => {
    const { push } = useHistory(); 
    const localId = localStorage.getItem('local_id');

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        getClasses();
    },[])

    const getClasses = () => {
        axiosWithAuth()
            .get(`/students/${id}/classes`)
            .then(res => {
                console.log(res.data)
                setClasses(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='Home'>
            <h1>My Classes</h1>
            <Route path='/student_home'>
                <StudentClassList classes={classes}/>
            </Route>
        </div>
    )
}

export default StudentHome;