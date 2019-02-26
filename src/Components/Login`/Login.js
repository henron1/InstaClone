import React from 'react';

const Login = props => {
    
    return(
        <div>
            <form onSubmit={props.onLogin}>

                <h1>InstagramCLONE</h1>
                <p>(enter if you dare)</p>
                <input type="text" name="username" value={props.username} placeholder="Username" onChange={props.handleChanges} required />
                <input type="password" name="password" value={props.password}  placeholder="Password" onChange={props.handleChanges} required />
                <input type="submit" value="Login" ></input> 

            </form>
            
        </div>
    )
}

   
    // addNewUsername = ev => {
    //     this.setState({
    //         username: ev.target.name
    //     });
    // }

    // addNewPassword = ev => {
    //     this.setState ({
    //         password: ev.target.name
    //     });
    // }

  

    
        
    


export default Login;