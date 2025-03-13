import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class PortalsDemo extends Component {
    //if  event.stopPropagation(); is commented that this button will bubbles upa dn triggers parent onlcik as well. Even
    // though this component is in diffrent tree on dom but behind the scene ParentOfDemo is parent of this component
    clickEventHandler(event){
        event.stopPropagation();    
    console.log('click')
}

  render() {
    this.rootPortalElem=document.getElementById('root-portal');
    console.log(this.rootPortalElem);

    return ReactDOM.createPortal((
      <div>
       <h1>Portals Component</h1> 
       <button onClick={this.clickEventHandler.bind(this)}>Click Me</button>
      </div>
    ),this.rootPortalElem)
  }
}

export default PortalsDemo
