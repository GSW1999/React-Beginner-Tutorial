import React, { useState } from 'react'

export default function FuncEvent() {
    const [text,setText]=useState('Welcome');
    function setText1(){
        setText('Thanks for subscribe');
    }
    return (
    <div>
        <h1>{text}</h1>
      
      {/* Two approach of attaching event handler
      
      1. By Arrow function
      {/* <button onClick={()=>setText('Thanks for subscribe')}>Subscribe</button> */}
      
      {/* 2. By just assigning function reference variabe */} 
      <button onClick={setText1}>Subscribe</button>
    </div>
  )
}
