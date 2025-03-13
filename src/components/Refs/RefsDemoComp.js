import React, { Component } from 'react'

class RefsDemoComp extends Component {
    constructor(props) {
      super(props)
      
      //Approach 1
      this.inputRef=React.createRef();

    //Approach 2 - Callback ref
    this.cbRef=null;
    this.setCbRef=(element)=>{
        // console.log(element);
        this.cbRef=element;
    }
    }
    
    componentDidMount(){
        console.log(this.inputRef);

        //Approach 1
        // this.inputRef.current.focus();
        
        //Approach 2
        if(this.cbRef){
        this.cbRef.focus();
        }

    }
  render() {
    return (
      <div className='my-4'>
        Refs Example
        {/* Approach 1 */}
        <input type='text' ref={this.inputRef} />

        <input type='text' ref={this.setCbRef} />
      </div>
    )
  }
}

export default RefsDemoComp
