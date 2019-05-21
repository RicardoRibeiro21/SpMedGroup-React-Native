import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.3.96:5000'
});

export default api;