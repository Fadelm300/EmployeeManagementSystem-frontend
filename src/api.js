import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // رابط الباك اند
  headers: {
    'Accept': 'application/json',
  },
});

export default api;
