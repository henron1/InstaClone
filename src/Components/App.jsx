import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//Data import
import { posts } from '../posts';

//Component Imports
import LoginPage from './Login/LoginPage';
import Homepage from './Posts/Homepage';
import CreatePost from './Create/CreatePost';

const clearedPost = {
  name: '',
  age: '',
  email: '',
};

class App extends Component {
  state = {
    posts: posts,
    newPost: clearedPost,
    searchInput: '',
    isLiked: false,
  };

  addPost = () => {};

  addLikes = timestamp => {
    const updatedLikes = this.state.posts.map(post => {
      if (post.timestamp === timestamp) {
        if (this.state.isLiked) {
          post.likes -= 1;
          this.setState({ isLiked: false });
        } else {
          post.likes += 1;
          this.setState({ isLiked: true });
        }
      }
      return posts;
    });
    this.setState({ post: updatedLikes });
  };

  addComment = () => {};

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <LoginPage
              handleChange={this.handleChange}
              userData={this.state.username}
            />
          )}
        />
        <Route
          path="/posts"
          render={props => (
            <Homepage
              {...props}
              addLikes={this.addLikes}
              handleChange={this.handleChange}
              posts={this.state.posts}
              isLiked={this.state.isLiked}
            />
          )}
        />
        <Route path="/create" render={props => <CreatePost {...props} />} />
      </div>
    );
  }
}
export default App;