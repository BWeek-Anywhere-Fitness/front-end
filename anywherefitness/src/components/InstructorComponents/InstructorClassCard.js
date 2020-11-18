import React from 'react';
import EditClass from './EditClass';

const InstructorClassCard = props => {
    const { class_name, class_type, class_start, class_duration, class_intensity, class_location, instructor_name } = props.cls;

    return (
        <div className='classCard'>
            <h2>{class_name}</h2>
            <p>instructor: {instructor_name}</p>
            <p>type: {class_type}</p>
            <p>start: {class_start}</p>
            <p>duration: {class_duration}</p>
            <p>intensity: {class_intensity}</p>
            <p>location; {class_location}</p>
        </div>
    )
}

export default InstructorClassCard;