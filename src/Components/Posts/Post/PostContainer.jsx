import React from 'react';
import CommentSection from './CommentSection';
import styled from 'styled-components';

const PostContainer = props => {
  return (
    <PostStyle>
      <Header>
        <ThumbnailImage
          src={props.post.thumbnailUrl}
          alt={'A picture of user ' + props.post.username}
        />
        <Username>{props.post.username}</Username>
      </Header>
      <PostImageContainer>
        <PostImage
          src={props.post.imageUrl}
          alt={'Posted by ' + props.post.username}
        />
      </PostImageContainer>
      <IconLikeContainer>
        {props.isLiked ? (
          <IconStyling
            onClick={() => props.addLikes(props.post.timestamp)}
            className="far fa-heart red"
          />
        ) : (
          <IconStyling
            onClick={() => props.addLikes(props.post.timestamp)}
            className="far fa-heart"
          />
        )}

        <IconStyling className="far fa-comment" />

        <LikeStyling>
          <strong>{props.post.likes} likes</strong>
        </LikeStyling>
      </IconLikeContainer>
      <CommentSectionStyling>
        <CommentSection post={props.post} />
        <AddCommentFormStyling />
      </CommentSectionStyling>
    </PostStyle>
  );
};

export default PostContainer;

//Container
const PostStyle = styled.div`
  .liked {
    color: red;
  }
  @media screen and (min-width: 700px) {
    border: 1px solid #efefef;
    background-color: white;
  }
  margin: 25px auto;
  width: 100%;
  border-top: 1px solid #efefef;
  max-width: 700px;
`;
//All header styling
const Header = styled.div`
  @media screen and (min-width: 700px) {
    border: 1px solid #efefef;
  }
  background-color: #fafafa;
  padding: 20px 15px 18px;
  display: flex;
  justify-content: baseline;
  align-items: center;
`;
const Username = styled.h3`
  font-size: 14px;
  margin-left: 15px;
`;
const ThumbnailImage = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const PostImageContainer = styled.div`
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
    background-color: white;
  }
  height: 400px;
`;
const PostImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  padding: 0 0px 5px;
`;

const IconLikeContainer = styled.div`
  padding: 0 11px;
  margin-top: 10px;
  font-size: 24px;
  background-color: white;
`;
const IconStyling = styled.i`
  margin-right: 17px;
  cursor: pointer;
`;

const LikeStyling = styled.p`
  font-size: 12px;
`;

const CommentSectionStyling = styled.div`
  padding: 9px;
  background-color: white;
`;

const AddCommentFormStyling = styled.form`
  width: 100%;
`;