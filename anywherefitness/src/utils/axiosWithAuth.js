import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://back-end-active-fitness.herokuapp.com/api',
        headers: {
            authorization: token
        }
    })
}