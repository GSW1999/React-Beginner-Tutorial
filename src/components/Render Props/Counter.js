import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          counter:0
        }
    }
    incrementCounter(){
        this.setState({counter:this.state.counter+1})
    }
    
  render() {
    return (
      <div>
        {this.props.render(this.state.counter,()=>this.incrementCounter())}
      </div>
    )
  }
}

export default Counter
