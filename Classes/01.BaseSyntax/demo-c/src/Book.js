import React, { Component } from 'react';

const bookStyles = {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridColumnGap: '1rem',
  margin: '2rem 0',
};

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: true,
    };
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const { id, img, title, author } = this.props.info;

    return (
      <React.Fragment>
        <article style={bookStyles}>
          <img src={img} width='150' alt='book' />
          <div>
            <h4>Title : {title}</h4>
            <h6>Author : {author}</h6>
            <button type='button' onClick={this.handleInfo}>
              toggle info
            </button>
            {this.state.showInfo && (
              <p>
                Some random book description text.Some random book description
                text.
              </p>
            )}
            <button type='button' onClick={() => this.props.handleDelete(id)}>
              delete
            </button>
          </div>
        </article>

        <hr />
      </React.Fragment>
    );
  }
}
