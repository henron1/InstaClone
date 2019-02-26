import React from 'react';
import Nav from './Navigation/Nav';
import PostContainer from './Post/PostContainer';

const Homepage = props => {
  return (
    <>
      <Nav />
      {props.posts.map((post, key) => {
        return (
          <PostContainer
            key={key}
            isLiked={props.isLiked}
            addLikes={props.addLikes}
            post={post}
          />
        );
      })}
    </>
  );
};
export default Homepage;