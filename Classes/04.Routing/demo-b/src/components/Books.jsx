import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Book = React.lazy(() => import('./Book'));
const BooksList = React.lazy(() => import('./BooksList'));

class Books extends React.Component {
  state = {
    books: [
      { id: '123', title: 'Book 1' },
      { id: '125', title: 'Book 2' },
    ],
  };

  render() {
    const { books } = this.state;
    const { path } = this.props.match;

    return (
      <div>
        <Suspense fallback={<span>Loading book information</span>}>
          <Switch>
            <Route
              path={path}
              render={() => <BooksList books={books} />}
              exact
            />
            <Route path={`${path}/:id`} component={Book} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default Books;
