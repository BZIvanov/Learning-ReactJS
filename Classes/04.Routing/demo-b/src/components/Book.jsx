import React from 'react';

const books = [
  {
    123: {
      title: 'Book 1',
      author: 'Iva',
    },
    125: {
      title: 'Book 2',
      author: 'Mira',
    },
  },
];

const getBookData = (id) => {
  const book = books.find((book) => book.hasOwnProperty(id))[id];
  return Promise.resolve(book);
};

class Book extends React.Component {
  state = {
    title: '',
    author: '',
  };

  render() {
    const { author, title } = this.state;

    return (
      <div>
        <p>
          Title: <span>{title}</span>
        </p>
        <p>
          Author: <span>{author}</span>
        </p>
      </div>
    );
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const data = await getBookData(id);

    this.setState(data);
  }
}

export default Book;
