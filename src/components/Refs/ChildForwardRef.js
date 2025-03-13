import React from 'react'

function ChildForwardRef(props,ref) {
  return (
    <div>
       <input type='text' ref={ref} />
    </div>
  )
}

export default React.forwardRef(ChildForwardRef)
