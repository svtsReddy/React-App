import React,{Component} from "react";
import {Redirect} from 'react-router-dom';

class Login extends Component{
    constructor(){
      super();
      this.state={
    
      }
    }
      changeHandler=(event)=>{
        this.setState({
          [event.target.name]:event.target.value
        })
      }
    
      submitHandler=(event)=>{
        console.log(this.state)
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: 'React POST Request Example' })
      };
      fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
          .then(response => response.json())
          .then(data => this.setState({ postId: data.id }));
          if (true) {
            return <Redirect to='/Welcome' />
          }
      }
    render(){
        return(
          <div>
            <form onSubmit={this.submitHandler}> 
            <h1>Welcome to User..!</h1>
            <label>User Name : </label>
            <input type="text" value={this.state.userName} onChange={this.changeHandler}
            name="userName" placeholder="Enter Name" />
            <br></br>
            <label>User Name : </label>
            <input type="text" value={this.state.emailId} onChange={this.changeHandler}
            name="emailId" placeholder="Enter Mail" /><br></br>
            <label>User Name : </label>
            <input type="password" value={this.state.password} onChange={this.changeHandler}
            name="password" placeholder="Enter Password" />
            <br></br>
            <button>Submit</button>
            </form>
          </div>
        );
    }
    }
export default Login;    