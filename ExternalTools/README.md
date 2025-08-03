# External tools

Contains info and examples about external packages, browsers, IDEs, etc...

## VSCode

### Searching in folders

With **ctrl+shift+f** or by clicking the **search button** you can search in the whole directory opened with VSCode.

## Prop Types

If you are not using TypeScript, you can use **PropTypes**. You need to install them running the below command:

```
npm install prop-types
```

In the component where you want to use them you have to import them.

```javascript
import PropTypes from "prop-types";

//component here

ComponentName.propTypes = {
  type: PropTypes.string.isRequired,
};
```

## Global fonts

Global fonts can be added in the **index.html** file folder. And then you can use it in your css file. Or you can also use the index.css file.
For example:

```html
<head>
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
    rel="stylesheet"
  />
</head>
```

## Chrome specific feature

If we have the console drawer open, which shows the console in every tab in the dev tool, from the three dots icon we can activate the **Coverage** tab.

On there we can see how much of the code was used when running the page. This is usefull in case we want to do some optimizations.

### React Developer Tools

## Scoped styles

For scoped styles checkout **css modules** for React.

## Working with .svg files

Read [here](https://create-react-app.dev/docs/adding-images-fonts-and-files/) for more details on how to work with and import svg files.

## Animations package

**react-addons-css-transition-group** - is a nice package for animating react elements, for example when rendering a list or removing items 1 by 1.

#### Another animation package

If we are using some animations where we have control with React over displaying and hiding them, we might experience issues, because on hiding for example React will not wait for the animation to finish. As a solution we can use the following package.

```bash
npm install react-transition-group --save
```
