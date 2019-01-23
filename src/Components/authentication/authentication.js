import React from 'react';
//eslint-disable-next-line
import App from '../../App'
import Login from '../Login/Login'
import PostPage from '../PostContainer/PostsPage'


const authenticate = PostPage => Login => 
  class extends React.Component {
      constructor() {
            super();
            this.state ={
                username: '',
                password: '',
                loggedIn: false

            }
        }

        onLogin = ev => {
            this.setState({
                loggedIn:true
            })
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('password', this.state.password);

        }
    
        handleChanges = ev => {
            this.setState({ [ev.target.name]: ev.target.value });
        };

     

        componentDidMount() {
            if (localStorage.hasOwnProperty('username')) {
                let username = localStorage.getItem("username");
                
                username = JSON.parse(username)
                this.setState({
                    username: username,
                    loggedIn: true
                })
                // this.setState(prevState => {
                //     return {loggedIn: true}
                
                // })
            }            
        }
       
    render() {
        if (this.state.loggedIn){
            return <PostPage />;
        }
        return <Login onLogin={this.onLogin} handleChanges={this.handleChanges}/>
    }
  };
  
  export default authenticate(PostPage)(Login)