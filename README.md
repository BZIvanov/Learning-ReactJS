# General

## Searching in folders

With **ctrl+shift+f** you can search in the whole directory opened with VS code.

## Chrome specific feature

If we have the console drawer open, which shows the console in every tab in the dev tool, from the three dots icon we can activate the **Coverage** tab.

On there we can see how much of the code was used when running the page. This is usefull in case we want to do some optimizations.

## Animations package

**react-addons-css-transition-group** - is a nice package for animating react elements, for example when rendering a list or removing items 1 by 1.

## Another animation package

If we are using some animations where we have control with React over displaying and hiding them, we might experience issues, because on hiding for example React will not wait for the animation to finish. As a solution we can use the following package.

```bash
npm install react-transition-group --save
```

## Scoped styles

For scoped styles checkout css modules for React.

## Global variables

For details read [DOCS](https://create-react-app.dev/docs/adding-custom-environment-variables/).

To use global variables create .env file. Every variable name must start with **REACT_APP**. So actual global variable will look like _REACT_APP_API_KEY_. And to access the variable in the app, use it like this _process.env.REACT_APP_API_KEY_.

If you want to use global variables in your index.html you have to put the variable name in percent signs. Here is example **%REACT_APP_API_KEY%**.

And these variables don't provide security so you should never put sensitive information in these varibles on the front-end.

## Working with .svg files

Read [here]('https://create-react-app.dev/docs/adding-images-fonts-and-files/') for more details on how to work with and import svg files.
