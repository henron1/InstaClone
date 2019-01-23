import React from 'react';
import Comments from './comments'





function CommentsContainer(props) {
    return (
        <div>
            {/* {props.post.map((data, index) => {
                return <Post key={index} data={data}/>
            })} */}
            <Comments username={props.username} text={props.text}  />
            {props.comments.map((data, index) =>{
                return <Comments key={index} data={data} username={data.username} text={data.text} />
            })}
        </div>
    );
}



export default CommentsContainer;