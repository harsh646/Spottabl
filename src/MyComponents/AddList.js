import React, { useState } from 'react'

export default function AddList({addList}) {
    const[name, setName]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        addList(name);
        setName(" ");

        

    }
  return (
 <div className='con5'>
     <h3 className='one'>CUSTOMER MANAGE SUCCESS</h3>
     <form onSubmit={submit}>
         <div className='con2'> 
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"></label>
          <input  type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control" id="name" placeholder='NAME' />
          
         
        </div>
        <div>
        <button type="submit" className="btnn">ADD</button>
        </div>
        </div>
     </form>
 </div>
  )
}