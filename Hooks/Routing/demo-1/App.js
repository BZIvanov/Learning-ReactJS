import { Route, Switch, Link } from 'react-router-dom';

import Home from './components/Home';
import User from './components/User';
import About from './components/About';

const App = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to={{ pathname: '/', state: { userId: 2 } }}>Home</Link>
          </li>
          <li>
            <Link to='/user/2'>User</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/user/:id' component={User} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
