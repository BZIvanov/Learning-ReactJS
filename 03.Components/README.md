## General setup for Context

1. Creating the context.
On the root level folder create a folder for the context(just a suggestion). It could be comething like the following code:

```javascript
// folder: src/context/context.js or something like that, up to you
import React from 'react';

const AppContext = React.createContext({
    authenticated: false
});

export default AppContext;
```

2. Providing the data
In this example we will provide for the whole app in App.js file

```javascript
import React from 'react';
import AppContext from './context/context';

function App() {
  return (
    <AppContext.Provider value={{authenticated: false}}>
      <div>My app is placed here</div>
    </AppContext.Provider>
  );
}

export default App;
```

3. Getting the data wherever we need it.
Here we take the data in a component in our app where we need to use the context data.

```javascript
import React, { useContext } from 'react';
import AppContext from '../../../context/context';

const LoginForm = (props) => {
    const appContext = useContext(AppContext);

    const changeContext = () => {
        appContext.authenticated = true;
    }
}

export default LoginForm;
```
