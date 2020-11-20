import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios';

const initialState = {
    class_name: '',
    class_type: '',
    class_start: '',
    class_duration: '',
    class_intensity: '',
    class_location: '',
    class_maxStudents: '',
}

const EditClass = (props) => {
    // console.log('Props', props)
    // const { class_name, class_type, class_start, class_duration, class_intensity, class_location, class_maxStudents } = props

    const [editing, setEditing] = useState({
        class_name: props.class_name,
        class_type: props.class_type,
        class_start: props.class_start,
        class_duration: props.class_duration,
        class_intensity: props.class_intensity,
        class_location: props.class_location,
        class_maxStudents: props.class_maxStudents
    })

    const { id } = useParams()
    const { push } = useHistory()

    useEffect(() => {
        axios
            .get(`https://back-end-active-fitness.herokuapp.com/api/classes/${id}`)
            .then(res => {
                console.log('useEffect axiosWithAuth', res.data)
                setEditing({
                    class_name: res.data.class_name,
                    class_type: res.data.class_type,
                    class_start: res.data.class_start,
                    class_duration: res.data.class_duration,
                    class_intensity: res.data.class_intensity,
                    class_location: res.data.class_location,
                    class_maxStudents: res.data.class_maxStudents
                })
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    const onChange = e => {
        setEditing({
            ...editing,
            [e.target.name]: e.target.value,
        })
        console.log(editing)
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log('editing', editing)
        axiosWithAuth()
            .put(`/classes/${id}`, editing)
            .then(res => {
                // props.setClassList(
                //     props.classList.map((cls) => {
                //         if(cls.id ===id){
                //             return res.data
                //         }else {
                //             return cls
                //         }
                //     })
                // )
                setEditing(initialState)
                push('/instructor_home')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h2>Edit Class</h2>
            <form onSubmit={onSubmit}>
            <input
                type="text"
                name="class_name"
                value={editing.class_name}
                onChange={onChange}
                placeholder="Class Name"
                />
                <br></br>
                <br></br>
                <input
                type="text"
                name="class_type"
                value={editing.class_type}
                onChange={onChange}
                placeholder="Class Type"
                />
                <br></br>
                <br></br>
                <input
                type="text"
                name="class_start"
                value={editing.class_start}
                onChange={onChange}
                placeholder="Class Start"
                />
                <br></br>
                <br></br>
                <input
                type="text"
                name="class_duration"
                value={editing.class_duration}
                onChange={onChange}
                placeholder="Class Duration"
                />
                <br></br>
                <br></br>                
                <input
                type="text"
                name="class_intensity"
                value={editing.class_intensity}
                onChange={onChange}
                placeholder="Class Intensity"
                />
                <br></br>
                <br></br>
                <input
                type="text"
                name="class_location"
                value={editing.class_location}
                onChange={onChange}
                placeholder="Class Location"
                />
                <br></br>
                <br></br>
                <input
                type="text"
                name="class_maxStudents"
                value={editing.class_maxStudents}
                onChange={onChange}
                placeholder="Class Max Students"
                />
                <br></br>
                <br></br>
                <button>Save changes</button>
            </form>
        </div>
    )
}

export default EditClass

