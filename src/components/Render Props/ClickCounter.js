import React, { Component } from 'react'

class ClickCounter extends Component {
  render() {
    const {counter,incrementCounter}=this.props;
    return (
      <div>
        <button onClick={incrementCounter}>Click {counter} times</button>
      </div>
    )
  }
}

export default ClickCounter
