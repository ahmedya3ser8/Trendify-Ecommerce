import axios from "axios";

axios.defaults.baseURL = 'https://ecommerce.routemisr.com';
axios.defaults.headers.common['token'] = localStorage.getItem('accessToken');
