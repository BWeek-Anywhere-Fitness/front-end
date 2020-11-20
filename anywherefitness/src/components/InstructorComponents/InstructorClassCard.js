import React, { useState, useEffect } from 'react';
import EditClass from './EditClass';
import { useParams } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const InstructorClassCard = () => {
    // const { class_name, class_type, class_start, class_duration, class_intensity, class_location, instructor_name } = props.cls
    // console.log('InstructorClassCard', props)
    // console.log('Props.cls', props.cls)
    // console.log('props class duration', props.cls.class_duration)
    const {id} = useParams();
    const [myClasses, setMyClasses] = useState([])

    const getClassData = () => {
        axiosWithAuth()
        .get(`/classes/${id}`)
        .then(res => {
            console.log(res.data)
            setMyClasses(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getClassData()
    },[])

    return (
        <div className='classCard'>
            <h2>{myClasses.class_name}</h2>
            <p>instructor: {myClasses.instructor_name}</p>
            <p>type: {myClasses.class_type}</p>
            <p>start: {myClasses.class_start}</p>
            <p>duration: {myClasses.class_duration}</p>
            <p>intensity: {myClasses.class_intensity}</p>
            <p>location; {myClasses.class_location}</p>
        </div>
    )
}

export default InstructorClassCard;