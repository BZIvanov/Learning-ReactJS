## Using global font

Global fonts can be added in the index.html file in the public folder. And then you can use it in your css file. Or you can also use the index.css file.
For example:

```html
<head>
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
    rel="stylesheet"
  />
</head>
```

## Using prop types

To use prop types you need to install them. In the terminal run the command:

```
npm install prop-types
```

In the component where you want to use them you have to import them.

```javascript
import PropTypes from 'prop-types';

//component here

ComponentName.propTypes = {
  type: PropTypes.string.isRequired,
};
```

## Events

Click [here](https://reactjs.org/docs/events.html#supported-events) for a list of events you can use

## Reference type data

- Working with caution with reference types. For example when working with arrays or objects.

Bad example:
Imagine we have in the state persons array, if we splice like that we will change the original state

```javascript
const persons = this.state.persons;
persons.splice(2, 1);
```

Good example:
Like this with slice we will get new array containing all the elements from the array in the state

```javascript
const persons = this.state.persons.slice();
// or
const persons = [...this.state.persons];
persons.splice(2, 1);
```
