import { Component } from "react"
const withCounter=(WrappedComponent,incrementByCount=1)=>{
    class WithCounter extends Component{
        constructor(props) {
            super(props)
          
            this.state = {
               counter:0
            }
          }
          
        //   incrementCount(){
        //     this.setState({counter:this.state.counter+1})
        //   }

        incrementCount(){
                this.setState({counter:this.state.counter+incrementByCount})
              }
        render(){
        return <WrappedComponent incrementCount={this.incrementCount.bind(this)}  counter={this.state.counter} {...this.props}/>
       }
    }
    return WithCounter
}

export default withCounter

// Links for Learning
// https://www.geeksforgeeks.org/react-js-higher-order-components/