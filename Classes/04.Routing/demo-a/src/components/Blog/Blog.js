import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';

// the newest way of lazy loading is as follows. We will use an example some random Streets component
const Streets = React.lazy(() => import('./Streets/Streets'));

// this is how we will lazy load the component
// below const with async component will be called only when we try to use it, meaning when the Route hits it
const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true,
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: '#fa923f',
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}{' '}
          {/*this line is example of guard and lazy loading the old fashion way*/}
          <Route path="/posts" exact component={Posts} />
          <Route
            render={() => (
              <h1>Not found. Without the path it will always match</h1>
            )}
          />
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/" component={Posts} /> */}
          {/* below is the newest way of lazy loading */}
          <Route
            path="/streets"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <Streets />
              </Suspense>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Blog;
