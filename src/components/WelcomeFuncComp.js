import React from 'react'

export function Welcome(){
    return <h1>Welcome -  Functional Component</h1>
}
export function WelcomeFuncComp(){
    return <h2>Welcome -  Functional Component 2</h2>
}

//When you export like this then you can import and use it by using different name also
// Example :  import Welcome1 from './components/WelcomeFuncComp'    this will work

//multiple default export is not allowed. So you have to use named export by prefixing function with expor keyword
//export default Welcome;
//export default WelcomeFuncComp;                  //give your error


//RECOMMENDED WAY - user arrow function
/*export const Welcome =() =>{return <h1>Welcome -  Functional Component</h1>}
export const WelcomeFuncComp = ()=>{
    return <h2>Welcome -  Functional Component 2</h2>
}*/


/*
Important Points
1. A module can only have one default export, but you can have multiple named exports
2. If you have multiple components (functions) in one file, you should use named exports, When importing, you need to use curly braces {} to import the specific components.
3. You can also export one of the components as the default export if needed.When importing, the default export does not require curly braces.
4. Use of Default 
   a. The default export in JavaScript is used to designate one primary value (e.g., a function, object, or class) as the main export of a module.
   b. When a module is primarily focused on providing a single functionality, you can use default export to emphasize that function, component, or object as the main item of the file.
   c. With a default export, you can rename the imported value without having to use as syntax.
   d. For consistency when following common conventions (e.g., React components often use default exports).


*/