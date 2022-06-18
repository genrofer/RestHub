import axios from 'axios';

const baseUrl = axios.create({
     baseURL: 'http://api.themoviedb.org/3/',
})

export default baseUrl;