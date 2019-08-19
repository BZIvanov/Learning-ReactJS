# Hooks
1. Hooks have to be placed on the top level of the component, not nested in something. For example do not use in another function or in a if statement.

---

## useState hook
1. useState takes as an argument the initial state. Initial state could be anything like array, object, string, number, boolean etc.
2. useState returns 2 values. The first is the current state and the second is a function with which we can update the state.
3. In a component we can use useState multiple times and it is recomended every data to be in a different useState, because different states in a single useState are not merged.

```javascript
import React, { useState } from 'react';

const Todo = props => {
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
    };
    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName));
    };

    return (
        <div>
            <input type="text" value={todoName} onChange={inputChangeHandler} />
            <button onClick={todoAddHandler}>Add</button>
        </div>
    );
}

export default Todo
```

---

## useEffect hook
1. useEffect is used any side effects like http requests for example.
2. useEffect takes 2 arguments. The first argument is a function which will be executed. The second argument is controlling execution times, because without it the first argument will execute on each render method, which may often lead to infinite loop or some other unwanted behaviour.
3. If the second argument is empty array the useEffect will run only once, because after initialized the empty array will never change.
4. If the second argument is some variable useEffect will run each time that variable is changed.

```javascript
import React, { useState, useEffect } from 'react';

const Todo = props => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        axios.get('https://some-url/todos').then(res => {
            setTodoList(res);
        });
    }, []);

    return (
        <div>
            <p>{todoList[0]}</p>
        </div>
    );
}

export default Todo
```

5. The first argument can have return which will be executed before the useEffect which will do clean up work if necessary.
6. As useState we can have multiple useEffects in a component.

```javascript
import React, { useState, useEffect } from 'react';

const Todo = props => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        axios.get('https://some-url/todos').then(res => {
            setTodoList(res);
        });
        return () => {
            console.log("I will be ran before the get request, exception is only the very first render of the component");
        };
    }, [todoList]);

    return (
        <div>
            <p>{todoList[0]}</p>
        </div>
    );
}

export default Todo
```

---

## useContext hook

1. Creating the context.
On the root level folder create a folder for the context(just a suggestion). It could be comething like the following code:

```javascript
// folder: src/context/context.js or something like that, up to you
import React from 'react';

const authContext = React.createContext();

export default authContext;
```

2. Providing the data
In this example we will provide for the whole app in App.js file

```javascript
import React from 'react';
import AuthContext from './context/context';

function App() {
  return (
    <AuthContext.Provider value={{authenticated: false}}>
      <div>My app is placed here</div>
    </AuthContext.Provider>
  );
}

export default App;
```

3. Getting the data wherever we need it.
Here we take the data in a component in our app where we need to use the context data.

```javascript
import React, { useContext } from 'react';
import AuthContext from '../../../context/context';

const LoginForm = (props) => {
    const aContext = useContext(AuthContext);

    const changeContext = () => {
        aContext.authenticated = true;
    }
}

export default LoginForm;
```

4. Changing something on the Context will not cause rerender and updating of the components, for that we can combine it with useState, for example where our Context property is equal to the state/1st argument of the useState and second argument updating the state will cause the rerender and updating.

---

## useReducer hook

```javascript
import React, { useEffect, useReducer } from 'react';

const Todos = (props) => {

    const todoListReducer = (state, action) => {
        switch (action.type) {
        case 'ADD':
            return state.concat(action.payload);
        case 'SET':
            return action.payload;
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
        }
    };

    const [todoList, dispatch] = useReducer(todoListReducer, []);

    useEffect(() => {
        axios.get('https://some-url/todos').then(res => {
            dispatch({type: 'SET', payload: res});
        });
    }, [item]);
};

export default Todos;
```
