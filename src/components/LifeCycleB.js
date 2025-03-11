import React, { Component } from 'react'

export class LifeCycleB extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      message:props.message,
      isChildUpdated:false
   }
   console.log('LifeCycleB constrcutor');
 }
 static getDerivedStateFromProps(props,state){
     console.log('LifeCycleB getDerivedStateFromProps',props,state);
    if(state.isChildUpdated){
        return{isChildUpdated:false}
    }
     if(props.message!==state.message){
        return {message:props.message};
    }
    return null;
  }
 
    render() {
      console.log('LifeCycleB render');
    return (
      <div>
        {this.state.message}<br/>
        <button onClick={()=>this.setState({message:'Child - Thanks for subscribe',isChildUpdated:true})}>Child - Subscribe</button>
      </div>
    )
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('LifeCycleB shouldComponentUpdate',nextProps,nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifeCycleB getSnapshotBeforeUpdate',prevProps,prevState);
    return null
  }
  componentDidMount(){
    console.log('LifeCycleB componentDidMount');
  }
  componentDidUpdate(){
    console.log('LifeCycleB componentDidUpdate');
  }
}



export default LifeCycleB
