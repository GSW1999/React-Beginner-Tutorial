import React, { Component } from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state={
            message:"Welcome Visitor"
        }
    }
    render() {
        return (
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </>
        )
    }

    changeMessage(){
        console.log('Method triggered')
        this.setState({
            message:"Thank You for subscribing!" 
        })
    }
}

export default Message