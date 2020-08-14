import axios from 'axios';

/* This is how we create instance. The benefit of using instance is that we can instead creatin global
default settings and interceptors we can make different for different parts of our application.
We use the different instances by importing the file where the instance is created, for example this file with this example instance. */
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request... we can also set here for example

export default instance;
