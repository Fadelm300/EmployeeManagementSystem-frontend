import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    Accept: 'application/json',
  },
});


api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;




// if we need to use environment variable for baseURL in future, we can uncomment below code
// import axios from 'axios';

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL, // <-- هنا يستخدم المتغير
//   headers: {
//     Accept: 'application/json',
//   },
// });

// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;

//we have to fix .env file to work with Vite properly by a

//dding VITE_ prefix to our variablesnd then we can use it like this:

// VITE_API_URL=http://localhost:8080/api

// php artisan serve --port=8080
