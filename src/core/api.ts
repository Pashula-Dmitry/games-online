import axios from 'axios';

const HTTP = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Accept: '*/*'
  }
});

export default HTTP;
