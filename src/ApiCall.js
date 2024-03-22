import React, { useState } from 'react';

function ApiCall(){
  const [name, setName] = useState("");
  const [email, setEmail]= useState("");
  const [mobile, setMobile]=useState("")
  function saveUser(){
    // console.warn("name: ",name, "| Email",email, "| mobile",mobile);
    let data = {name, email, mobile}
    fetch("http://localhost:3000/data",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      console.log("result", result)
      result.json().then((resp)=>{
        console.warn(resp);
      })
    })
  }
  return (
    <div>
      <h1>POST API Call</h1>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name" /><br /><br />
      <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" /><br /><br />
      <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile" /><br /><br />
      <button type='button' onClick={saveUser}>Save New User</button>
    </div>
  )
}


export default ApiCall;
