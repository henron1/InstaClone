import React, { Component } from 'react';
import SearchBar from '../SearchBar/searchBar'
import PostContainer from './postContainer'
import dummyData from '../../dummy-data'

class PostPage extends Component  {
    constructor(props){
        super(props);
        this.state={
            posts:dummyData,
            newCommentText: '',
            searchInput: ''
        }
    }

    searchFilter = (e) => {
        e.preventDefault();
        console.log(this.state.searchInput)
        let newArr = []
        //eslint-disable-next-line
        let newPosts = this.state.posts.map(post => {
          if (post.username.includes(this.state.searchInput)) {
              newArr.push(post)
          } 
        })
        console.log(newArr)
        this.setState({posts: newArr})
    }

    addNewLike = (e, id) => {
        // console.log(e.target)
        //  this.setState (prevState => ({
        //   likes: prevState.like = prevState.like + 1
        //  }))
    
        let newPosts = this.state.posts.map(post => {
          if(post.imageUrl === id){
            post.likes = post.likes + 1
          }
          return post
        })
        this.setState({posts: newPosts})
    }

    addNewComment = (e, id) => { 
        e.preventDefault();
        
        // find post
        const post = this.state.posts.find(post => post.imageUrl === id)
        // add comment to post
        post.comments = [...post.comments, {text: this.state.newCommentText, username:'JohnDoe'}]
        // add post to posts
        this.setState({posts: [...this.state.posts, post]})
    }; 

    handleChanges = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
    };
    
    
    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    render() {
        return(
            <div>
                <div>
                    <SearchBar searchInput={this.state.searchInput} handleChanges={this.handleChanges} searchFilter={this.searchFilter}/>
                </div>
                <div>
                    {this.state.posts.map((data, index) => {
                        return(
                            <PostContainer key={index} username={data.username} thumbnailUrl={data.thumbnailUrl} imageUrl={data.imageUrl} like={this.state.like} likes={data.likes} timestamp={data.timestamp} comments={data.comments} addNewComment={this.addNewComment} handleChanges={this.handleChanges} newCommentText={this.state.newCommentText} addNewLike={this.addNewLike}/>
                        ) 
                     })}
    
                </div>
            </div>
            
               
           
        );
    }
}

export default PostPage