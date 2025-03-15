import React, { Component } from 'react'

class HoverCounter extends Component {
  render() {
    const {counter,incrementCounter}=this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCounter}>Hover {counter} times</h1>
      </div>
    )
  }
}

export default HoverCounter
