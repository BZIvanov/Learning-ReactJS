import React, { Component } from 'react';
import Book from './Book';
import books from './data';

export default class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books,
    };
  }

  handleDelete = (id) => {
    const filteredBooks = this.state.books.filter((item) => item.id !== id);
    this.setState({
      books: filteredBooks,
    });
  };

  render() {
    return (
      <section>
        <h2 style={{ textAlign: 'center' }}>This is our Booklist</h2>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item} handleDelete={this.handleDelete} />
        ))}
      </section>
    );
  }
}
