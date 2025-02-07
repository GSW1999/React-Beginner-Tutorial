import React from 'react'
//This component is to understand JSX concept

var name=<h1>HelloWord</h1>
console.log(name);

const HelloJSX=()=>{
    return (
        <div>
            <h1 id="root-div" className="root-class">Intro to JSX</h1>
            <h2>Intro to JSX2</h2>
        </div>
    )
    // return React.createElement('div',null,
    //     React.createElement('h1',{id:'root-div',className :'root-class'},'Intro to JSX'),React.createElement('h2',null,'Intro to JSX2')
    //);
}
export default HelloJSX;