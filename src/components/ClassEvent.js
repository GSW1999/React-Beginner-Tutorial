import React, { Component } from 'react'

export class ClassEvent extends Component {
  
  constructor(){
    super();
    this.state={
        text:'Welcome'
    }
     {/* Approach - 3 Using .bind(this) in constructor */}
    // this.setText=this.setText.bind(this)    commented for approach 4
  }

//   commented for approach 4
//    setText(){
//     this.setState({
//         text: 'Thanks for subscribe'
//     })
//   }

setText=()=>{
    this.setState({
        text:'Thanks for subscribe'
    })
}
    render() {
    return (
      <div>
        <h1>{this.state.text}</h1>

        {/* Two approach of attaching event handler */}


        {/* Approach - 1 Using .bind(this) */}
        {/* <button onClick={this.setText.bind(this)}>Subscribe</button> */}
        
        {/* Approach - 2  using arrow function */}
        {/* <button onClick={()=>this.setText()}>Subscribe</button> */}
        {/* <button onClick={()=>this.setState({
        text: 'Thanks for subscribe'
    })}>Subscribe</button> */}

        {/* Approach - 3 Using .bind(this) in constructor */}
    <button onClick={this.setText}>Subscribe</button>

     {/* Approach - 4 Using method as class property */}
      </div>
    )
  }
}

export default ClassEvent
