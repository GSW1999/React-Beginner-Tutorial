import React, { Component } from 'react'

export class ChildComp extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.eventHandler('Child 1')}>Greet Parent</button>
      </div>
    )
  }
}

export default ChildComp
