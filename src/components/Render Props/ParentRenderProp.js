import React, { Component } from 'react'
import Counter from './Counter'
import  ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

class ParentRenderProp extends Component {
  render() {
    return (
      <div>
        <Counter render={(counter,incrementCounter)=><ClickCounter counter={counter} incrementCounter={incrementCounter}/>}></Counter>
      <Counter render={(counter,incrementCounter)=><HoverCounter counter={counter} incrementCounter={incrementCounter} />}/>
        </div>
    )
  }
}

export default ParentRenderProp
