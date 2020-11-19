import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import InstructorClassCard from './InstructorClassCard';

function Course(props) {
    const [cls, setCls] = useState(null)
    const { id } = useParams()
    const { push } = useHistory()
    
    const fetchCls = (id) => {
        axios
            .get(`/classes/${id}`)
            .then(res => {
                console.log(res.data)
                setCls(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteCls = () => {
        axiosWithAuth()
            .delete(`/classes/${id}`)
                .then(res => {
                    props.setClasses(props.classes.filter(cls => {
                        return cls.id !==id
                    }))
                })
                .catch(err => {
                    console.log(err)
                })
                push('/instructor_home')
    }

    useEffect(() => {
        fetchCls(id)
    }, [id])

    return (
        <div className='movie-container'>
            <InstructorClassCard/>

            <button onClick={() => {
                push(`/edit-class/${id}`)
            }}>
                Edit
            </button>
            <button onClick={() => {
                deleteCls()
            }}>
                Delete
            </button>
        </div>
    )
}

export default Course