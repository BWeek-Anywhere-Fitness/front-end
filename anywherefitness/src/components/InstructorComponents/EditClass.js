import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const initialState = {
    id: '',
    class_name: '',
    instructor_name: '',
    class_type: '',
    class_start: '',
    class_duration: '',
    class_intensity: '',
    class_location: '',
    class_maxStudents: '',
}

const EditClass = (props) => {
    const [editing, setEditing] = useState()
    const { id } = useParams()
    const { push } = useHistory()

    useEffect(() => {
        axiosWithAuth()
            .get(`/classes/${id}`)
            .then(res => {
                setEditing(res.data)
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
    }

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
            .put(`/classes/${id}`, editing)
            .then(res => {
                props.setClassList(
                    props.classList.map((cls) => {
                        if(cls.id ===id){
                            return res.data
                        }else {
                            return cls
                        }
                    })
                )
                push('/instructor_home')
                setEditing(initialState)
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
                    name='class_name'
                    type='text'
                    placeholder='Class Name'
                    value={editing.class_name}
                    onChange={onChange}
                />
                <input
                    name='instructor_name'
                    type='text'
                    placeholder='Instructor Name'
                    value={editing.instructor_name}
                    onChange={onChange}
                />
                <input
                    name='class_type'
                    type='text'
                    placeholder='Class Type'
                    value={editing.class_type}
                    onChange={onChange}
                />
                <input
                    name='class_start'
                    type='time'
                    placeholder='Class Start'
                    value={editing.class_start}
                    onChange={onChange}
                />
                <input
                    name='class_duration'
                    type='number'
                    placeholder='Class Duration'
                    value={editing.class_duration}
                    onChange={onChange}
                />
                <input
                    name='class_intensity'
                    type='text'
                    placeholder='Class Intensity'
                    value={editing.class_intensity}
                    onChange={onChange}
                />
                <input
                    name='class_location'
                    type='text'
                    placeholder='Class Location'
                    value={editing.class_location}
                    onChange={onChange}
                />
                <input
                    name='class_maxStudents'
                    type='number'
                    placeholder='Max Class Size'
                    value={editing.class_maxStudents}
                    onChange={onChange}
                />
                <button>Save changes</button>
            </form>
        </div>
    )
}

export default EditClass

