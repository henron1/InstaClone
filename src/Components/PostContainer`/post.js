import React from 'react';
import './postContainer.css'

import styled from 'styled-components';

const Posttop = styled.div` 
    display: flex;
    flex-direction: row;
    width:640px;
    background: #ffffff;
    margin-left:304px;
    `

const Topimg =styled.img`

display:flex;
justify-content:center;
border-radius: 30px;
margin-right:20px;
margin-top: 5px;
margin-left:5px;

text-align:center;`



function Post(props) {
    return (
        <div className="post-master">
            <Posttop>
                <Topimg 
                src={props.thumbnailUrl} 
                alt='img' 
                width='50px' 
                height="50px"></Topimg>
                <h4>{props.username}</h4>
            </Posttop>
            {/* <div className="post-content">
                <img src={props.imageUrl} alt="content"></img>
                <h4>{props.likes}</h4> */}
                
            {/* </div> */}
        
        </div>
        
    )
}

export default Post;