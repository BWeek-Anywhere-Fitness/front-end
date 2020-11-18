import react, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Filter = (props) => {
    const [filter, setFilter] = useState({ 
        class_name: '', 
        class_type: '', 
        class_start: '', 
        class_duration: '', 
        class_intensity: '', 
        class_location: '', 
        class_maxStudents: '' 
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .get('/classes')
            .then(res => {
                setFilter(res.data)
            })
            .catch(err => console.log(err.response))
    }

    const handleChange = (e) => {
        setLogin({ ...filter, [e.target.name]: e.target.value })
    }

    const allClasses = axiosWithAuth().get('/classes').then(res => {setFilter(res.data)}).catch(err => console.log(err.response));

    const getUnique = (arr, comp) => {
        const unique = arr
            // Store the comparison values in the array
            .map(e => e[comp])
            // Store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)
            // Eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);
        return unique;
    }

    return (
        <div className="filteredList">
            <h1>Find a Class</h1>
            <form onSubmit={handleSubmit}>
                {/* Creates a text input field for users to search for class by name */}
                <input 
                    name="class_name"
                    type="text"
                    value={props.class_name}
                    onChange={handleChange}
                />

                {/* Creates a dropdown for the class types */}
                const uniqueClasses = this.getUnique(allClasses.class_type, class_type)

                <select name="class_type" value={props.class_type} onChange={handleChange}>
                    {uniqueClasses.map(item => (
                        <option key={item.id} value={item.class_type}>
                            {item.class_type}
                        </option>
                    ))}
                </select>
                
                {/* Creates a dropdown for the class start times */}
                <select name="class_start" value={props.class_start} onChange={handleChange}>
                    {allClasses.class_start.map(item => (
                        <option key={item.id} value={item.class_start}>
                            {item.class_start}
                        </option>
                    ))}
                </select>

                {/* Creates a dropdown for the class duration */}
                <select name="class_duration" value={props.class_duration} onChange={handleChange}>
                    {allClasses.class_duration.map(item => (
                        <option key={item.id} value={item.class_duration}>
                            {item.class_duration}
                        </option>
                    ))}
                </select>

                {/* Creates a dropdown for the class intensity */}
                <select name="class_intensity" value={props.class_intensity} onChange={handleChange}>
                    {allClasses.class_intensity.map(item => (
                        <option key={item.id} value={item.class_intensity}>
                            {item.class_intensity}
                        </option>
                    ))}
                </select>

                {/* Creates a dropdown for the class location */}
                <select name="class_location" value={props.class_location} onChange={handleChange}>
                    {allClasses.class_location.map(item => (
                        <option key={item.id} value={item.class_location}>
                            {item.class_location}
                        </option>
                    ))}
                </select>

                {/* Creates a dropdown for the class' max students */}
                <select name="class_maxStudents" value={props.class_maxStudents} onChange={handleChange}>
                    {allClasses.class_maxStudents.map(item => (
                        <option key={item.id} value={item.class_maxStudents}>
                            {item.class_maxStudents}
                        </option>
                    ))}
                </select>

                <button>Search Classes</button>
            </form>
        </div>
    );
};

export default Filter