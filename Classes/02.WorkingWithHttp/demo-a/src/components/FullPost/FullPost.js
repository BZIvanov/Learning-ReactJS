import React, { Component } from 'react';
import axios from '../../axios';
import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  // we use componentDidUpdate so we can make requests when the props are changed
  componentDidUpdate() {
    if (this.props.id) {
      /* below if is needed to avoid infinite loop because when we set the state component will update and will make request again and set state again...
      Basically we check if we have not post or we have different id we selected and only in that case we make request and we will not run in infinite loop because of the id will be the same */
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        axios.get('/posts/' + this.props.id).then((response) => {
          this.setState({ loadedPost: response.data });
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete('/posts/' + this.props.id).then((response) => {
      console.log(response);
    });
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    // below if means we selected a post, but we are still waiting for the request to be completed
    if (this.props.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className='FullPost'>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className='Edit'>
            <button onClick={this.deletePostHandler} className='Delete'>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
