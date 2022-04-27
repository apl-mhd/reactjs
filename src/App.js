import React from "react";


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
    this.getCookie = this.getCookie.bind(this)
    this.fetchUsers = this.fetchUsers.bind(this)

  }

  getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

componentWillMount(){
  this.fetchUsers()
}

fetchUsers(){

  fetch('http://127.0.0.1:8000/api/auth/users/')
  .then(response => response.json())
  .then(data => {
    //console.log(data)
    this.setState({
      users: data
    })
  })
}


  handleChange(e){
    var name = e.target.name
    var value = e.target.value
    this.setState({
      [name]: value
    })
    console.log(JSON.stringify(this.state))
  }

  handleSubmit(e){
    e.preventDefault();
      var csrftoken = this.getCookie('csrftoken')
    var url = 'http://127.0.0.1:8000/api/auth/create-user/'

    fetch(url, {
      method: 'POST',
      headers:{
          'Content-type':'application/json',
          'X-CSRFToken':csrftoken,
      },
      body:JSON.stringify(this.state)
    }).then((res)=>{
      this.fetchUsers()
      this.setState({
         password: '',
         first_name: '',
         last_name: '',
         username: '',
         email:'',
         image: null,
      })
    }).catch(function(error){
      console.log('error', error)
    })
    
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
                </tr>  
              </tbody>
       )
     }    
            
  );
    //console.log(this.state.users)
    //console.log('apel')
    
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
          {/* <label>
            Photo:
            <input onChange={this.handleChange} type="file" name="image"/><br/>
          </label> */}
        
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