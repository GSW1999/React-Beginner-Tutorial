import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { UserContext } from './userContext'

export class ComponentB extends Component {
  
  static contextType=UserContext
  render() {
    return (
      <div>
        Component B - {this.context}
        <ComponentC/>
      </div>
    )
  }
}

// ComponentB.contextType=UserContext

export default ComponentB
