import React, { Component } from 'react';
import Book from './Book';
import booksData from './bookData';

export default class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData,
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
        <h3>This is our Booklist</h3>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item} handleDelete={this.handleDelete} />
        ))}
      </section>
    );
  }
}
