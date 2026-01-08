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

## Working with .svg files

Read [here](https://create-react-app.dev/docs/adding-images-fonts-and-files/) for more details on how to work with and import svg files.
