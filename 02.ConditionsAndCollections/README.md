## Hints

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

## Lifecycle methods

### Class based

1. constructor - in the beggining the constructor is called where we get the props. Dont forget to call super(props) method in the constructor if receiving any props. In the constructor side effects or any logic are not a good practice, only some set ups

2. getDerivedStateFromProps(props, state) - dont do side effects here

3. render() - the third on the line is the render method. Usually here we prepare the data to be rendered.

4. render child components - all children components with their life cycle hooks are running here

5. componentDidMount() - good to use side effects.

6. shouldComponentUpdate(nextProps, nextState) - used for performance optimizations, because with it we can cancel updating on some of the components

7. componentDidUpdate() -
