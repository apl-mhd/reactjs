import React from "react";
import axios from "axios";

class Alluser extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            users: [],
            user_type: '',
        }
        
        this.fetchUser = this.fetchUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
    }

    componentDidMount(){
        this.fetchUser()
    }

    deleteUser(id, e){
        e.preventDefault();
        axios.delete(`http://127.0.0.1:8000/api/auth/delete-user/${id}/ `)
        .then(response =>{
            console.log(response.data)
            this.fetchUser()
        } )
        
    }

    fetchUser(){
        let formData = new FormData()
        formData.append('token', localStorage.getItem('token'))
        axios.post(`http://127.0.0.1:8000/api/auth/users/`, formData)
        .then(response =>{
            this.setState({ users: response.data.users })
            this.setState({ user_type: response.data.user_type })
            console.log(localStorage.getItem('token'))
        })
        .catch(error => console.log(error)) 
    }


    render(){
    console.log(this.state)

        let users = this.state.users.map( user => {
            return(
                    <tbody key={user.id}>
                        <tr>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td> {user.image} </td>
                        {this.state.user_type === 'Super User'?<td><button onClick={(e) => this.deleteUser(user.id, e)}>Delete</button></td>: ''  } 
                        </tr>   
                    </tbody>  
            )
            })


        return(
            <div>
             <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Username</th>
                  <th scope="col">Image</th>
                   
                    {
                    this.state.user_type === 'Super User'? <th scope="col">Delete</th>:''
                    }  
        
                </tr>
              </thead>
    
              {users}

            </table>
            </div>
        )
    }
}



export default Alluser