import React from "react";
import axios from 'axios';


class Login extends React.Component{
     constructor(props){
        super(props)
         this.state = {
            username: '',
             password: '',
             token: false
         }

         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
         this.allUser = this.allUser.bind(this)  
         this.logedUser = this.logedUser.bind(this)
     }


     allUser(){
         axios.get(`http://127.0.0.1:8000/api/auth/users/`)
         .then(response => {
             console.log(response.data)
             
         })
     }

     componentDidMount(){
       // this.allUser()
     }

   
      handleChange(e){
        var name = e.target.name
        var value =e.target.value

        this.setState({
            [name]: value
        })

    }

    logedUser(e){
        e.preventDefault();
        console.log('submit');
        const formData = new FormData()
        var url = 'http://127.0.0.1:8000/api/auth/loged-user/'
        formData.append('token', localStorage.getItem('token'))
        axios.post(url, formData).then(response=>{
            console.log(response)
        })

    }

    handleSubmit(e){
        e.preventDefault();
        console.log('submitted')
        const formData = new FormData()

        var url = 'http://127.0.0.1:8000/api/auth/login/'

        formData.append('handle', this.state.username)
        formData.append('password', this.state.password)
        axios.post(url, formData).then(response => {
                console.log(this.state)
            localStorage.setItem('token', response.data['jwt'])
        })  

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

                <form onSubmit={this.logedUser}>
                    <input type="submit" value="loged in" />

                </form>
            </div>        
            )   
    }
}

export default Login
 