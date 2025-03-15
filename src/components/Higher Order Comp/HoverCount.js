import React, { Component } from 'react'
import withCounter from './withCounter'
class HoverCounter extends Component {
    render() {
        const {counter,incrementCount}=this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount} >Hover {counter} times</h1>
      </div>
    )
  }
}

export default withCounter(HoverCounter)
