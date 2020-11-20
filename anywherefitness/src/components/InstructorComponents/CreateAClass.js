import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export default function Create() {
    const { push } = useHistory();
    const id = localStorage.getItem('instructor_id');

    const initialLessonData = {
        class_name: "",
        class_type: "",
        class_start: "",
        class_duration: 0,
        class_intensity: "",
        class_location: "",
        class_maxStudents: 0
    }

    const [lessonData, setLessonData] = useState(initialLessonData)
    const [disabled, setDisabled] = useState(true);

    const onChange = (event) => {
        const { value, name } = event.target;
        setLessonData({
            ...lessonData,
            [event.target.name]: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(lessonData)
        axiosWithAuth()
            .post(`instructors/${id}/classes/new`, lessonData)
            .then(result => {
                console.log(result)
                setLessonData(initialLessonData)
                //push() // This will send instructors over to a list of their lessons where they can edit / delete.
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                type="text"
                name="class_name"
                value={lessonData.class_name}
                onChange={onChange}
                placeholder="Class Name"
                />

                <input
                type="text"
                name="class_type"
                value={lessonData.class_type}
                onChange={onChange}
                placeholder="Class Type"
                />

                <input
                type="text"
                name="class_start"
                value={lessonData.class_start}
                onChange={onChange}
                placeholder="Class Start"
                />

                <input
                type="number"
                name="class_duration"
                value={lessonData.class_duration}
                onChange={onChange}
                placeholder="Class Duration"
                />
                
                <input
                type="text"
                name="class_intensity"
                value={lessonData.class_intensity}
                onChange={onChange}
                placeholder="Class Intensity"
                />

                <input
                type="text"
                name="class_location"
                value={lessonData.class_location}
                onChange={onChange}
                placeholder="Class Location"
                />

                <input
                type="number"
                name="class_maxStudents"
                value={lessonData.class_maxStudents}
                onChange={onChange}
                placeholder="Class Max Students"
                />
                <button>Create Your Class</button>
            </form>
        </div>
    )
}