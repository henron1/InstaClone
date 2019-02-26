import React from 'react';
import './postContainer.css';
// import styled from 'styled-components'


// const = styled.div`
// margin-left: -485px;
// margin-top:10px;`

const MiddleContent = props => {
    return(
        <div className='middle-content'>
            <img src={props.imageUrl} alt="content"/>
            <div id="middleSmall">
                <i class="far fa-heart fa-3x" onClick={(e) => props.addNewLike(e, props.imageUrl)}></i>
                <i class="far fa-comment fa-3x"></i>
                <h4>{props.likes} likes</h4>
            </div>
            
        </div>
    )
}

export default MiddleContent;