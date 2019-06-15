import axios from 'axios';

// - V1 - //
    const instance = axios.create({
        baseURL: 'http://localhost:9000/api',
        headers: {
            authorization: localStorage.getItem('token')
        },
    })

export default instance