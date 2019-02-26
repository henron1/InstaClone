import React from 'react';

const Comment = props => {
  return (
    <p>
      <strong>{props.username}</strong> {props.text}
    </p>
  );
};

export default Comment;