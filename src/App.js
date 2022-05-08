import React from "react";
import axios from 'axios';
 
class App extends React.Component{
  constructor(props){
    super(props)
  
    this.state = {
         password: '',
         first_name: '',
         last_name: '',
         username: '',
         email:'',
         image: null,
         users:[]
       } 

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fileChange = this.fileChange.bind(this)
    this.fetchUsers = this.fetchUsers.bind(this)

  }

componentWillMount(){
  console.log('mount')
  this.fetchUsers()
}

fetchUsers(){

  fetch('http://127.0.0.1:8000/api/auth/users/')
  .then(response => response.json())
  .then(data => {
    this.setState({
      users: data
    })
  })
}

  handleChange(e){
    var name = e.target.name
    var value = e.target.value
        this.fetchUsers()    

    
    this.setState({
      [name]: value
    })
        console.log(this.state)
  }


  fileChange(e){
      this.setState({ image: e.target.files[0] });
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    var url = 'http://127.0.0.1:8000/api/auth/create-user/'

    formData.append('password', this.state.password);
    formData.append('username', this.state.username);
    formData.append('first_name', this.state.first_name);
    formData.append('last_name', this.state.last_name);
    formData.append('email', this.state.email);
		formData.append('image', this.state.image);
		axios.post(url, formData);
    this.fetchUsers()    
  }

  render( ){

     const listItems = this.state.users.map((user) =>{
       return(
          
             <tbody key={user.id}>
                <tr>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td> {user.image} </td>
                </tr>  
              </tbody>  
       )
     }    
            
  );
    
    
    return(

      <div className="main">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
          <label>
            Password: 
            <input onChange={this.handleChange} type="password" name="password"/> <br/>
          </label>

          <label>
            First Name: 
            <input onChange={this.handleChange} type="text" name="first_name"/><br/>
          </label>
          
          <label>
            Last Name: 
            <input onChange={this.handleChange} type="text" name="last_name"/><br/>
          </label>
          
          <label>
            Username:
            <input onChange={this.handleChange} type="text" name="username"/><br/>
          </label>
          
          <label>
            Email:
            <input onChange={this.handleChange} type="email" name="email"/><br/>
          </label>
           <label>
            Photo:
            <input onChange={this.fileChange} type="file" name="image"/><br/>
          </label> 
        
          <input type="submit" value="Submit"/>
        </form>
        </div>
          <div>

          <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Username</th>
                  <th scope="col">Image</th>
                </tr>
              </thead>
              
              {listItems}

            </table>
          </div>
      </div>
      

    )
  }
}

export default App;