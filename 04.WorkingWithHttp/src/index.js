import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

// AXIOS DEFAULT SETTINGS
// with the below row we can set default baseUrl and then when making requests we dont need to specify it on each request
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// and this is how we set some headers for all requests
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// and this is how we set something for POST requests only for example
axios.defaults.headers.post['Content-Type'] = 'application/json';


// INTERCEPTORS
// the interceptor will be used for all the requests for the application
axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config or whatever you want here

    // it is important to return the request so it can continue, otherwise it will be blocked
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
