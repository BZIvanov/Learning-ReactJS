import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../Post/Post';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
    // axios is configured so we dont need to write the full path just the last part of the endpoint. The base url is in the configuration
    axios
      .get('/posts')
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: 'Iva Ivanova',
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  selectedPostHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            postClick={() => this.selectedPostHandler(post.id)}
          />
        );
      });
    }

    return (
      <div>
        <section className='Posts'>{posts}</section>

        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>

        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
