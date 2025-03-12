import React, { Component} from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
import MemoComponent from './MemoComponent'

// change Component to PureComponent to use the behaviour on button click
class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Welcome'
      }
    }
    
    render() {
    console.log('Parent Component render');
    return (
      <div>
        <RegularComp message={this.state.message} />
        <PureComp message={this.state.message} />
        <MemoComponent message={this.state.message} />
        <button onClick={()=>this.setState({message:'Welcome'})}>Click Me!</button>
      </div>
    )
  }
}

export default ParentComponent
