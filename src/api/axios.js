import axios from 'axios';

const service = axios.create();

service.interceptors.response.use(
  res => {
    return res.data;
  }
)

export default service;