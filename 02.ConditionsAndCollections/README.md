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
