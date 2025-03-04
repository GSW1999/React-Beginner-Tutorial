import React, { useState } from 'react'

export default function TextForm({title}) {
    
    const [text,setText]=useState("");
   
    function convertToUpperCase(){
        setText(text.toUpperCase());
        //console.log('Clicked uupp');
    }
    function convertToLowerCase(){
        setText(text.toLowerCase());
        //console.log('Clicked uupp');
    }
    
    function updateText(event){
        setText(event.target.value);
        // console.log(event)
        
    }
    return (
    <div>
      <h1>{title}</h1>
      <textarea className="form-control" value={text} onChange={updateText} rows={10}></textarea>
      <div className='mt-2'>
      <button className='btn btn-primary mx-2' onClick={()=>convertToUpperCase()}>Convert To Upper</button>
      <button className='btn btn-primary mx-2' onClick={()=>convertToLowerCase()}>Convert To Lower</button>
      <button className='btn btn-primary' onClick={()=>setText("")}>Reset</button>
      </div>
    </div>
  )
}
