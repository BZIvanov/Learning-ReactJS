import axios from 'axios'; // 0.21.1

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default instance;
