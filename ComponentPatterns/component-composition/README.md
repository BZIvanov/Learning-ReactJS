# Component composition

A broad principle in React where you build complex UIs by combining simpler components together.

Component composition is useful technique to deal with problems such as **props drilling**.
It is achieved by taking advantage of using **children or props**.

## Component composition using children

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

## Component composition using props

Alternatively to the solution using children, we could achieve the same result, using props.

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
