import React, { Component } from 'react'
import ChildRef from './ChildRef';
import ChildForwardRef from './ChildForwardRef';

class ParentRef extends Component {
  constructor(props) {
    super(props)
    this.inputRef=React.createRef();
    this.inputRef2=React.createRef();
  }

  componentDidMount(){
    console.log(this.inputRef)
    console.log(this.inputRef2)
  }


  
    render() {
    return (
      <div>
        <ChildRef ref={this.inputRef} />
        <button onClick={()=>this.inputRef.current.focusInput()}>Click Me!</button>
        <ChildForwardRef  ref={this.inputRef2} />
        <button onClick={()=>this.inputRef2.current.focus()}>Click Me2!</button>
      </div>
    )
  }
}

export default ParentRef

// https://www.geeksforgeeks.org/how-to-create-refs-in-reactjs/
// hat.openai.com
