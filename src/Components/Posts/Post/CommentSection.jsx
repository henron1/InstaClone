import React from 'react';
import Comment from './Comment.jsx';
import styles from 'styled-components';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: '',
    };
  }
  componentDidMount() {
    this.setState({ comments: this.props.post.comments });
  }

  addNewComment = event => {
    event.preventDefault();
    const newCommentsArray = {
      comments: [
        ...this.state.comments,
        {
          username: 'user',
          text: this.state.newComment,
        },
      ],
      newComment: '',
    };
    console.log(newCommentsArray);
    this.setState(newCommentsArray);
  };

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
        {this.state.comments.map((comment, key) => {
          return (
            <Comment
              key={key}
              username={comment.username}
              text={comment.text}
            />
          );
        })}
        <form onSubmit={this.addNewComment}>
          <AddCommentStyling
            name="newComment"
            className="add-comment"
            placeholder="Add a comment..."
            type="text"
            value={this.state.newComment}
            onChange={this.handleChanges}
          />
        </form>
      </>
    );
  }
}
export default CommentSection;
const AddCommentStyling = styles.input`
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  border: none;
  :focus {
    outline-width: 0;
  }
`;