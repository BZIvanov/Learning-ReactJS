- getInitialProps is called on the server and with it we can provide data to the client.

- when using getInitialProps we can destructure query object, because next.js will always provide it

- files named like [id].js are special files from which we will receive as params key called id and value whatever is in the url

- \_app.js file in pages will be used for every page

- if we call getInitialProps in our \_app.js file and then we also call getInitialProps on one of our pages, for the page it will be skipped. To change this we can merge them.

- to easy check your cache and some other useful features you can install Apollo developer tools extension for Chrome
