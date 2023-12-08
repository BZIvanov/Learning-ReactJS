## Global variables

For details read [DOCS](https://create-react-app.dev/docs/adding-custom-environment-variables/).

To use global variables create .env file. Every variable name must start with **REACT_APP**. So actual global variable will look like _REACT_APP_API_KEY_. And to access the variable in the app, use it like this _process.env.REACT_APP_API_KEY_.

If you want to use global variables in your index.html you have to put the variable name in percent signs. Here is example **%REACT_APP_API_KEY%**.

And these variables don't provide security so you should never put sensitive information in these varibles on the front-end.

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

## Component composition

Component composition is useful technique to deal with problems such as props drilling.
It is achieved by taking advantage of using children.

```jsx
// BAD EXAMPLE

// As we can see in the example below, we are passing movies to the NavBar component so we can then pass it to MoviesCount component
// NavBar in this case does not need to be dependant on the movies and is less reusable this way

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <NavBar movies={movies} />
      <MoviesList movies={movies} />
    </>
  );
}

function NavBar({ movies }) {
  return (
    <>
      <Logo />
      <MoviesCount movies={movies} />
    </>
  );
}
```

```jsx
// GOOD EXAMPLE

// By using component composition with children we can provide the movies list to the components, where it is needed without props drilling

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <NavBar>
        <MoviesCount movies={movies} />
      </NavBar>
      <MoviesList movies={movies} />
    </>
  );
}

function NavBar({ children }) {
  return (
    <>
      <Logo />
      {children}
    </>
  );
}
```

Alternatively to the solution using children, we could achieve the same result, using a prop.

```jsx
// GOOD EXAMPLE

// By using component composition with a prop we can provide the movies list to the components, where it is needed without props drilling

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <NavBar rightElement={<MoviesCount movies={movies} />} />
      <MoviesList movies={movies} />
    </>
  );
}

function NavBar({ rightElement }) {
  return (
    <>
      <Logo />
      {rightElement}
    </>
  );
}
```

## Searching in folders

With **ctrl+shift+f** you can search in the whole directory opened with VS code.

## Chrome specific feature

If we have the console drawer open, which shows the console in every tab in the dev tool, from the three dots icon we can activate the **Coverage** tab.

On there we can see how much of the code was used when running the page. This is usefull in case we want to do some optimizations.

## Scoped styles

For scoped styles checkout css modules for React.

## Working with .svg files

Read [here](https://create-react-app.dev/docs/adding-images-fonts-and-files/) for more details on how to work with and import svg files.

## Animations package

**react-addons-css-transition-group** - is a nice package for animating react elements, for example when rendering a list or removing items 1 by 1.

#### Another animation package

If we are using some animations where we have control with React over displaying and hiding them, we might experience issues, because on hiding for example React will not wait for the animation to finish. As a solution we can use the following package.

```bash
npm install react-transition-group --save
```
