import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

import InstructorClassList from './ClassList';
import EditClass from './EditClass';
import Course from './Class';

const InstructorHome = () => {
    const { push } = useHistory(); 
    const localId = localStorage.getItem('local_id');

    // const [editing, setEditing] = useState(false);
    const [classes, setClasses] = useState([]);

    const getClasses = () => {
        axiosWithAuth()
            .get(`/instructors/${id}/classes`)
            .then(res => {
                console.log(res.data)
                setClasses(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getClasses();
    },[classes])

    return (
        <div className='Home'>
            <h1>My Classes</h1>

            <Route path='/instructor_home'>
                <InstructorClassList classes={classes}/>
            </Route>

            <Route path='/classes/:id'>
                <Course classes={classes}/>
            </Route>

            <Route path='/edit-class/:id'>
                <EditClass classes={classes} setClasses={setClasses}/>
            </Route>
        </div>
    )
}

export default InstructorHome;