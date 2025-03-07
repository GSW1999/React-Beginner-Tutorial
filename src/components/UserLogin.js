import React, { Component } from 'react'

export class UserLogin extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:false
    }
  }


  onClick(action){
    if(action=='Login'){
        this.setState( {
            isLoggedIn:true
         })

        }
        else{
            this.setState( {
                isLoggedIn:false
             }) 
        }
  }
  
//   //Approach -1 
//     render() {
// if(!this.state.isLoggedIn){
//     return (
//         <div>
//           <h1>Click Login Button</h1>
//           <button onClick={()=>this.onClick('Login')}>Log in</button>
//         </div>
//       )
// }
// else{
//     return (
//         <div>
//           <h1>Welcome Admin</h1>
//           <button onClick={()=>this.onClick('Logout')}>Log Out</button>
//         </div>
//       )
// }

// Approach - 2
//     render() {
//         let text,btnText;
//         if(this.state.isLoggedIn){
// text=<h1>Welcome Admin</h1>
// btnText=<button onClick={()=>this.onClick('Logout')}>Log Out</button>
//         }  
//         else{
//             text= <h1>Click Login Button</h1>
//             btnText=<button onClick={()=>this.onClick('Login')}>Log in</button>
//         }  
//     return (
//         <div>
//           {text}{btnText}
//         </div>
//       )

//   }



// Approach - 3
    render() {
        return (
            <div>
                <h1>{this.state.isLoggedIn?'Welcome Admin':'Click Login Button'}</h1>
                {this.state.isLoggedIn && <button onClick={() => this.onClick('Logout')}>Log Out</button>}
                {!this.state.isLoggedIn && <button onClick={() => this.onClick('Login')}>Log in</button>}
            </div>
      )
  }






}

export default UserLogin
