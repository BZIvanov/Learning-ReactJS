import axios from 'axios';

/* This is how we create instance. The benefit of using instance is that we can instead creatin global
default settings and interceptors we can make different for different parts of our application.
We use the different instances by importing the file where the instance is created, for example this file with this example instance. */

// INSTANCE DEFAULT SETTINGS
// with the below row we can set default baseUrl and then when making requests we dont need to specify it on each request
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// and this is how we set some headers for all requests
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
// and this is how we set something for POST requests only for example
instance.defaults.headers.post['Content-Type'] = 'application/json';

// INTERCEPTORS
// the interceptor will be used for all the requests for the application
instance.interceptors.request.use(
  (request) => {
    console.log('REQUEST', request);
    // Edit request config or whatever you want here

    // it is important to return the request so it can continue, otherwise it will be blocked
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log('RESPONSE', response);
    // Edit response config
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
