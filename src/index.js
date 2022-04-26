import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './User';
import Lifting from './Lifting';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Lifting/>)



// root.render(<App/>)


// const scaleNames = {
//     c: 'Celsius',
//     f: 'Farenheit',
// }

// class TemperatureInput extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleChange = this.handleChange.bind(this)
//         this.state ={temprature: ''}

//     }

//     handleChange(e){
//         this.setState({temprature: e.target.value})  
//     }

//     render(){
//         const temperature = this.state.temprature
//         const scale = this.props.scale

//         return(
//             <fieldset>
//                 <legend>Enter temperature in {scaleNames[scale]}</legend>
//                 <input value={temperature} onChange={this.handleChange}/>
//             </fieldset>
//         )
//     }
// }


// function BoilingVerdict(props){
//     if(props.celsius >=100){
//         return <p>The water would boil.</p>
//     }
//     return <p>The water would not boil.</p>
// }

// class Calculator extends React.Component{
   
    

//     render(){
//         return(
//            <div>
//                <TemperatureInput scale='c' />
//                <TemperatureInput scale='f' />
//            </div>

//         )
//     }
// }

//  root.render(<Calculator/>)


// class Reservation extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             isGoing: true,
//             numberOfGuests: 2,
//         }
//         this.handleInputChange = this.handleInputChange.bind(this)

//     }
//     handleInputChange(event){
//         const target = event.target
//         const value = target.type === 'checkbox' ? target.checked : target.value
//         const name = target.name

//         this.setState({
//             [name]: value
//         })

//         console.log(this.state)
//     }

//     render() {
//         return (
//              <form>
//                  <label>
//                      Is going:
//                      <input
//                         name="isGoing"
//                         type="checkbox"
//                         checked={this.state.isGoing}
//                         onChange={this.handleInputChange}
//                      />
//                  </label>
//                  <br/>
//                  <label>
//                      Number of guests:
//                      <input
//                      name="numberOfGuests"
//                      value={this.state.numberOfGuests}
//                      onChange={this.handleInputChange}
//                      />
//                  </label>
//              </form>
//         );
//     }

// }

// root.render(<Reservation/>)

// class FlavorForm extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {value: 'coconut'}
        
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)

//     }

//     handleChange(event){
//         this.setState({value: event.target.value})
//     }

//     handleSubmit(event){
//         alert(this.state.value)
//         event.preventDefault();
        
//     }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Pick your favorite flavor:
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">Grapefruit</option>
//                         <option value="lime">Lime</option>
//                         <option value="coconut">Coconut</option>
//                         <option value="mango">Mango</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         )
//     }


// }

// root.render(<FlavorForm/>)


// class EasyForm extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = { value: 'Please write an eassy about your favorite DOM element'}
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event){
//         this.setState({value: event.target.value})
//     }

//     handleSubmit(event){
//         alert(this.state.value)
//         event.preventDefault();
//     }

//     render(){

//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Essay:
//                     <textarea value={this.state.value} onChange={this.handleChange}> </textarea>
//                 </label>
//                 <input type='submit' value='Submit' />
//             </form>
//         )
//     }
// }

// root.render(<EasyForm/>)

// class NameForm extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {value: ''}
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(event){
//         this.setState({value: event.target.value})
//     }

//     handleSubmit(event){
//         alert(this.state.value)
//         event.preventDefault();
        
//     }

//     render(){
        
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                 name:
//                 <input type="text" value={this.state.value}  onChange={this.handleChange}/>
//                 </label>
//                 <input type="submit" value="submit" />
//             </form>
//         )
//     }
// }




// function Blog(props){

//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id} >{post.title}</li>
//       )}
//     </ul>
//   )

//   const content = ( props.posts.map((post) =>
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <h3>{post.content}</h3>
//       </div>))

//   return(
//     <div>
//       {sidebar}
//       <hr/>
//       {content}
//     </div>
//   )
// }

// const posts = [

//   {id:1, title:'hello world 1', content:'welcome to learn react 1'},
//   {id:2, title:'hello world 2', content:'welcome to learn react 2'}
// ]

// root.render(<Blog posts={posts}/>)

// function  NumberList(props){
//   const numbers = props.numbers
//   const ListItems = numbers.map((number, index) => <li key={index}>{number}</li>)
//   return(
//     <ul>{ListItems}</ul>
//   )
// }

// const numbers = [1,2,3,4,5]
// root.render(<NumberList numbers={numbers}/>)




// function UserGreeting(props){
//   return <h1>Welcome Back</h1>
// }

// function GuestGreeting(props){

//   return <h1>Please Sign Up</h1>
// }

// function Greeting(props){
//   const isLoggedIn = props.isLoggedIn
//   console.log(isLoggedIn)

//   if(isLoggedIn)
//     return  <UserGreeting/>
//   else
//   return <GuestGreeting/>
// }

// function LoginButton(props){
//   return(
//     <button onClick={props.onClick}>Login</button>
//   )
// }

// function LogoutButton(props){
//   return(
//     <button onClick={props.onClick} >Logout</button>
//   )
// }

// class LoginControl extends React.Component{
//   constructor(props){
//     super(props)
//     this.handleLoginClick = this.handleLoginClick.bind(this)
//     this.handleLogoutClick = this.handleLogoutClick.bind(this)
//     this.state = {isLoggedIn: false};

//   }

//   handleLoginClick(){
//     this.setState({isLoggedIn: true})
//   }

//   handleLogoutClick(){
//     this.setState({isLoggedIn: false})
//   }

//   render(){
//     const isLoggedIn = this.state.isLoggedIn

//     return(
//       <div>
//         <Greeting isLoggedIn={isLoggedIn}/>
//         {isLoggedIn  
//           ?<LogoutButton onClick={this.handleLogoutClick}/>
//           :<LoginButton onClick={this.handleLoginClick} />
//         }
//       </div>
//     )
//   }
  
// }


// root.render(
//   <LoginControl/>
// )


// class Togle extends React.Component{

//   constructor(props){
//     super(props)
//     this.state = {togle: true}
//     this.handleClick = this.handleClick.bind(this)

//   }

//   handleClick(){
//     this.setState(prevState => ({
//       togle: !prevState.togle
//     }))
//   }

//   render(){

//     return(
//       <button onClick={this.handleClick}>
//         {this.state.togle? 'On':'Off'}
//       </button>
//     )
//   }
// }

// class Toggle extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {isToogleOn: true}
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(){
//     this.setState(prevState => ({
//       isToogleOn: !prevState.isToogleOn
//     }))
//   }

//   render(){
//     return(
//       <button onClick={this.handleClick}>
//         {this.state.isToogleOn? 'ON':'OFF'}
//       </button>
//     )
//   }
// }






// function Form(){
//   function handleSubmit(e){
//     e.preventDefault();
//     console.log('You clicked submit');
//   }

//   return(
//     <form onSubmit={handleSubmit} >
//       <button type='submit'>Submit</button>
//     </form>
//   )
// }

// root.render(<Form/>)

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
