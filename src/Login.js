import React from "react";
import axios from 'axios';


class Login extends React.Component{
     constructor(props){
        super(props)
         this.state = {
            username: '',
             password: '',
         }
         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
         //this.fetchUser = this.fetchUser.bind(this)
     }

    //  componentDidMount(){
    //      this.fetchUser()
    //      console.log('mount')
    //  }

    //  fetchUser(){
    //      fetch('http://127.0.0.1:8000/api/auth/u/')
    //      .then(response => response.json())
    //      .then(data =>{
    //          //console.log(data)
    //      })
    //  }

      handleChange(e){
        var name = e.target.name
        var value =e.target.value

        this.setState({
            [name]: value
        })

        console.log(this.state)
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('submitted')
        const formData = new FormData()

        var url = 'http://127.0.0.1:8000/api/auth/login/'

        formData.append('handle', this.state.username)
        formData.append('password', this.state.password)
        axios.post(url, formData).then(data => console.log(data.data))
        // console.log('success')

    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <span>Username / Email </span>
                    <input onChange={this.handleChange} type="text" name="username" /> <br/>
                    <span>Password</span>
                    <input onChange={this.handleChange}  type="password" name="password"/> <br/>
                    <input  type="submit" value="Login"/>
                </form>
            </div>        
            )   
    }
}

export default Login
 