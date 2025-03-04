import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super();
        this.state={
            counter:0
        }
    }

    incrementBy1(){
        //set state is asynchronous in anture that's why we have to pass callback as second argument in setstae so that
        // console.log triggers after state is set.
        this.setState({
            counter:this.state.counter+1
        },
        ()=>console.log(this.state.counter)
    )
    }

    incrementByOne(){
        this.setState((prevState)=>({
            counter:prevState.counter+1
        })
    )
    }

    incrementBy5(){
        // reason for not using incrementBy1() method is because all setstate will update state at one go hence they will
        // get value of state as 0 at starting that don't get the previous value while updation
        this.incrementByOne();
        this.incrementByOne();
        this.incrementByOne();
        this.incrementByOne();
        this.incrementByOne();
        
    }
    render() {
    return (
      <div>
        <h1>Counter:{this.state.counter}</h1>
        <button onClick={()=>this.incrementBy1()}>Increment By 1</button>
        <button onClick={()=>this.incrementBy5()}>Increment By 5</button>
      </div>
    )
  }
}

export default Counter
