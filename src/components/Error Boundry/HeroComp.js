import React, { Component } from 'react'

class HeroComp extends Component {

    // thiscode won't work for error boundry
    clickEventHandler(){
        if(this.props.heroName=='Doreamon'){
            throw new Error('Wrong Hero Name Exception');
         }
    }
    render() {
    if(this.props.heroName=='Doreamon'){
       throw new Error('Wrong Hero Name Exception');
    }
    return (
      <div>
        {this.props.heroName}
        <button onClick={this.clickEventHandler.bind(this)}>Clcik me</button>
      </div>
    )
  }
}

export default HeroComp
