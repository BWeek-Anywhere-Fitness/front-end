import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const StudentClassCard = props => {
    const { class_name, class_type, class_start, class_duration, class_intensity, class_location, instructor_name } = props.cls;

    const id = localStorage.getItem('student_id');

    const studentInfo = {
        student_id: id
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(id);
        axiosWithAuth()
            .post(`classes/${props.cls.id}/students`, studentInfo)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            });
    }

    const onDelete = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .delete(`classes/${props.cls.id}/students`, studentInfo)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <div className='classCard'>
            <h2>{class_name}</h2>
            <p>instructor: {instructor_name}</p>
            <p>type: {class_type}</p>
            <p>start: {class_start}</p>
            <p>duration: {class_duration}</p>
            <p>intensity: {class_intensity}</p>
            <p>location: {class_location}</p>
            <button onClick={onSubmit}>Sign Up Here</button>
            <button onClick={onDelete}>Remove Class</button>
        </div>
    ) // Add the student registration here
}

export default StudentClassCard;