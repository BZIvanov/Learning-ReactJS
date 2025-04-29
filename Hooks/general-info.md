## Global variables

For details read [DOCS](https://create-react-app.dev/docs/adding-custom-environment-variables/).

To use global variables create .env file. Every variable name must start with **REACT_APP**. So actual global variable will look like _REACT_APP_API_KEY_. And to access the variable in the app, use it like this _process.env.REACT_APP_API_KEY_.

If you want to use global variables in your index.html you have to put the variable name in percent signs. Here is example **%REACT_APP_API_KEY%**.

And these variables don't provide security so you should never put sensitive information in these varibles on the front-end.

## Events

Click [here](https://reactjs.org/docs/events.html#supported-events) for a list of events you can use
