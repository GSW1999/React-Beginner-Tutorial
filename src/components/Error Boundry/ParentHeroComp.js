import React, { Component } from 'react'
import HeroComp from './HeroComp'
import ErrorBoundryComp from './ErrorBoundryComp'



class ParentHeroComp extends Component {
  render() {
    return (
      <div>
        <ErrorBoundryComp>
       <HeroComp heroName='Batman'/>
        </ErrorBoundryComp>
        <ErrorBoundryComp>
       <HeroComp heroName='Superman'/>
            </ErrorBoundryComp>
        <ErrorBoundryComp>
       <HeroComp heroName='Doreamon'/>
        </ErrorBoundryComp>
      </div>
    )
  }
}

export default ParentHeroComp
