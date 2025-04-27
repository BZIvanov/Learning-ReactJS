# useEffect hook

1. useEffect is used for any side effects like http requests for example.
2. useEffect takes 2 arguments. The first argument is a function which will be executed. The second argument is controlling execution times, because without it the first argument will execute on each render method, which may often lead to infinite loop or some other unwanted behaviour.
3. If the second argument is empty array the useEffect will run only once, because after initialized the empty array will never change.
4. If the second argument is some variable useEffect will run each time that variable is changed.
5. If no second argument, useEffect will run on every component render.
6. The first argument can have return which will be executed before the useEffect which will do clean up work if necessary.
7. As useState we can have multiple useEffects in a component.

## Content of this section

1. basic-usage
2. cleanup
