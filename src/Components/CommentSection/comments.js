import React from 'react';
import styled from 'styled-components'

const Comment = styled.div`
display: flex;
flex-direction: row;
margin-left:633px;`

const CommentH1 = styled.h1`font-size:1.9rem;`

const CommentP = styled.p`
margin-top:35px;
margin-left:10px;`

function Comments(props) {
    return (
        <Comment>
            <CommentH1>{props.username}</CommentH1> 
            <CommentP>{props.text}</CommentP>
           
        </Comment>
        
    )
}

export default Comments;