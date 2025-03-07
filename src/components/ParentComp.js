import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {
  constructor(){
    super();
    this.state={
      message:''
    }
  }
  greetParent(childName){
    this.setState(this.state={
      message:`Hello Parent from ${childName}`
    })
    alert(this.state.message)
  }
  render() {
    return (
      <div>
        <ChildComp eventHandler={this.greetParent.bind(this)} />
      </div>
    )
  }
}

export default ParentComp
