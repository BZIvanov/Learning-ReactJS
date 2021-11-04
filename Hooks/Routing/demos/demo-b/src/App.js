import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route exact={true} path='/about' component={About} />
      </Switch>
    </div>
  );
};

export default App;
