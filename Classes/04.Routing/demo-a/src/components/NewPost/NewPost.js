import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './NewPost.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Max',
    submitted: false,
  };

  componentDidMount() {
    // below is example of guard
    // If unauth => this.props.history.replace('/posts');
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };
    axios.post('/posts', data).then((response) => {
      // replace will replace the last on the brwoser history stack while push will add to the stack and we can go back
      // history push and history replace are alternatives for using Redirect component
      this.props.history.replace('/posts');
      // this.setState( { submitted: true } );
    });
  };

  render() {
    let redirect = null;
    if (this.state.submitted) {
      // Redirect is a component which when rendered we get redirect so in most cases we will render it conditionally
      redirect = <Redirect to="/posts" />;
    }
    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
