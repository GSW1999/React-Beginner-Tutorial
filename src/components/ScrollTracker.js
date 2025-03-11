import React, { Component } from 'react'

export class ScrollTracker extends Component {
    state={scrollPosition:0};
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.scrollPosition !== prevState.scrollPosition) {
            console.log(`Scroll position updated: ${this.state.scrollPosition}px`);
            if (this.state.scrollPosition > 300) {
                console.log("You've scrolled past 300px!");
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
        this.setState({ scrollPosition: window.scrollY });
    };
  render() {
    return (
      <div>
         <h1>Scroll down and check the console</h1>
                <p style={{ height: "1500px" }}>Keep scrolling...</p>
      </div>
    )
  }
}

export default ScrollTracker
