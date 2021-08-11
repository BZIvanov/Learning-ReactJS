import React, { Fragment, Component, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import './index.css';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Books = lazy(() => import('./components/Books'));

class AppWrapper extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Suspense fallback={<span>Loading...</span>}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/books' component={Books} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Fragment>
      </Router>
    );
  }
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
