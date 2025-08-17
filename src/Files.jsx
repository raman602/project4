import React from 'react'
import "./File2.css"
import { useState } from 'react'


function Files() {

    const [name,setname]=useState()
    const [same,getsame]=useState()


  const getname=(e)=>{
    setname(e.target.value);
    
  }
const valu=()=>{
    getsame(name);
   setname("")
}


  return (
    <div>
      <div>
        <h2>{same}</h2>
        <input type='text' onChange={getname}  value={name}></input>
        <br/>
        <button type='button' onClick={valu}>submit</button>
      </div>


    </div>
  )
}

export default Files
