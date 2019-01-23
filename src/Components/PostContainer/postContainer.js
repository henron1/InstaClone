import React from 'react'
import Post from './post'
import CommentsContainer from '../CommentSection/commentSection'
import MiddleContent from './middleContent'
import styled from 'styled-components';
import './postContainer.css';

const PostMaster = styled.div`
background: whitesmoke;
display: flex;
flex-direction: column;
justify-content: center;
padding-top:20px;`

const LowContent = styled.div` margin-top:-70px;`

const CommentInput =styled.input`width:300px; height: 30px; border-radius:5px; margin-left:-17.5%`


function PostContainer(props) {
    // console.log(props.addNewComment)
    return (
        <PostMaster>
            <div className="top-content">
                <Post username={props.username} thumbnailUrl={props.thumbnailUrl}  />
            </div>
            <div className='middlecontent'>
                <MiddleContent imageUrl={props.imageUrl} likes={props.likes} addNewLike={props.addNewLike}/>
            </div>
            <LowContent>
               <CommentsContainer comments={props.comments} />
            </LowContent>
            <form onSubmit= {(e) => props.addNewComment(e, props.imageUrl)} >

                <CommentInput
                name='newCommentText'
                value={props.newCommentText}
                onChange={props.handleChanges}
                 placeholder="Comment...">
                </CommentInput>

            </form>
        </PostMaster>
        

        
    );
}

export default PostContainer;