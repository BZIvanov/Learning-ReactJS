## General setup for Context

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
