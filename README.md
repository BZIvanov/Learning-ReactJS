# ReactMaterials

## Arrow functions

Arrow functions are useful in cases where we want to preserve **this**, because they use the context they are placed in.

```javascript
const printName = () => console.log("Ina")
```

```javascript
const printName = name => console.log(name)
```

```javascript
const printName = (name) => console.log(name)
```

```javascript
const printName = (first, last) => console.log(first + " " + last)
```

```javascript
const sumNumbers = (first, second) => {
    let sum = first + second;
    return sum;
```

