# Routing

Detailed info can be found here: https://reacttraining.com/react-router/web/guides/quick-start

Routing is not included in React by default. So we need to install it additionally.
To install it run in the terminal the following command:

```
npm install react-router-dom --save
```


## Route

- path - path is the path from the url
- exact - means to match the exact url in the browser. When set it means it is set to true
- render - is for what to be rendered when the route is matched. Render is useful to use, when we want to provide props to the component we want to render
- component - the specified component will be rendered when the route matches

```javascript
import { Route } from 'react-router-dom';

// ex.1 
<Route path="/" exact render={() => <h1>I am home component</h1>} />
// ex.2
<Route path="/posts" component={Posts} />
// ex.3 here is how we add additional props
<Route path="/posts" render={(props) => <Posts {...props} someMore={someMore} />}>

```

Another Note on Route: Route will add additional props to the component loaded with Route, but child components of that component will not get that props which provide information about the routing. For that we can use special high order component called **withRouter** imported from react-router-dom.

## Link

Link is replacement for the normal <a> tag to avoid the page reloading.

- to - to which url we want to be sent
- hash - used for fragments which are part of a page usually
- search - used for query parameters

```javascript
import { Link } from 'react-router-dom';

// ex.1
<Link to="/" >Home</Link>
// ex.2
<Link to={{
    pathname: '/something',
    search: '?my-thing=true',
    hash: '#that-thing'
}} >Something</Link>

```

## Switch

Switch is used to use only the first matching Route. Because in case more than one matches all will be rendered.

```javascript
import { Switch } from 'react-router-dom';

<Switch>
    <Route path="/posts" component={Posts} />
    <Route path="/:id" component={Posts} />
</Switch>
```
