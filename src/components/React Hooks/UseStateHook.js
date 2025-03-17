import React, { useState } from 'react'

function UseStateHook() {
    const [count,setCount]=useState(0);
    function incrementBy5(){
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1);
        }
    }
  return (
    <div>
      <h2>Count : {count}</h2><hr/>
      <button onClick={()=>setCount(count+1)}>Increment By 1</button>
      <button onClick={()=>setCount(count-1)}>Decrement By 1</button>
      <button onClick={()=>setCount(prevCount=>prevCount+2)}>Increment By 2</button>
      <button onClick={incrementBy5}>Increment By 5</button>
      <button onClick={()=>setCount(0)}>Reset</button>

      <br/><br/>
      <h2>User Form</h2>
      <UserForm/>
      
    </div>
  )
}

function UserForm(){
    const [userInfo,setUserInfo]=useState({firstName:'',lastName:''})
    const [userList,setUserList]=useState([]);

return (
    <>
    <input type='text' value={userInfo.firstName} onChange={(e)=>setUserInfo({...userInfo,firstName:e.target.value})} />
    <input type='text' value={userInfo.lastName} onChange={(e)=>setUserInfo({...userInfo,lastName:e.target.value})} />
    <button onClick={()=>setUserList([...userList,userInfo])}>Add to list</button>
    {JSON.stringify(userInfo)}
    <ul>{userList.map((list,index)=><li key={index}>{list.firstName} {list.lastName}</li>)}</ul>
    </>
)
}

export default UseStateHook
