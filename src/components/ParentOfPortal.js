import React, { Component } from 'react'
import PortalsDemo from './PortalsDemo';
class ParentOfPortal extends Component {
    onClickEventHandler(){
        alert('Portals clicked bubbling')
    }
  render() {
    return (
      <div onClick={this.onClickEventHandler.bind(this)}>
        <PortalsDemo/>
      </div>
    )
  }
}

export default ParentOfPortal
