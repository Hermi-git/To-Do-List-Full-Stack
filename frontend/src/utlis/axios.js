import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",  // Corrected base URL
   
});

export default axiosInstance;
