import axios from "axios";


const api = axios.create({
    baseURL:"http://10.10.4.117:3001"
});

export default api;


