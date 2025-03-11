import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'Welcome from parent'
    }
    console.log('LifeCycleA constructor');
  }
  static getDerivedStateFromProps(){
    console.log('LifeCycleA getDerivedStateFromProps');
    return null;
  }
  
    render() {
        console.log('LifeCycleA render');
    return (
      <div>
        <LifeCycleB message={this.state.message}/>
        <button onClick={()=>this.setState({message:'Parent - Thanks for subscribe'})}>Parent - Subscribe</button>
      </div>
    )
  }
  shouldComponentUpdate(){
    console.log('LifeCycleA shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(){
    console.log('LifeCycleA getSnapshotBeforeUpdate');
    return null
  }
  componentDidMount(){
    console.log('LifeCycleA componentDidMount');
  }
  componentDidUpdate(){
    console.log('LifeCycleA componentDidUpdate');
  }
}

export default LifeCycleA
