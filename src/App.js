import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
// import SearchBar from './Components/SearchBar/searchBar.js';
// import PostContainer from './Components/PostContainer/postContainer.js'
// import CommentsContainer from './Components/CommentSection/commentSection'
//eslint-disable-next-line
import PostPage from './Components/PostContainer/PostsPage'


import authenticate from './Components/authentication/authentication'
import Login from './Components/Login/Login'


class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor running!')
    this.state = {
      posts: dummyData,
      newCommentText: '',
      searchInput: ''
      // like: 0
    };
  }


  render() {
    // console.log('render is running!')
    return (
      <div className="App">
        {/* <Conditional /> */}
       <PostPage />
      </div>
    );
  }
}

const Conditional = authenticate;

export default App;
