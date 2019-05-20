import axios from 'axios';

const api = axios.create({
    baseURL : 'http://192.168.4.112:5001/api'

});

export default api;