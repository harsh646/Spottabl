import React from "react";
import { useState } from 'react';
export default function ListItem({ list, onDelete }) {
  let i=0;
  let j=1;
  for(i=0;i<list.name.length;i++)
  {
    if(list.name[i]===" ")
    {
      break;
    }
  }
  if(i+1!==undefined)
  {
  j=i+1;
  }
  if(j>list.name.length)
  {
    j=1;
  }
 
  const[mySt,setMySt]=useState({
    display:"none"
  })
  const handleClick2=()=>{
    if(mySt.display==="none")
    {
      setMySt({
      display:"block"
    })
  }
  else{
    setMySt({
      display:"none"
    })
  }
}
  return (
    <div>
    <div className="fl">
      <div className="con4" onClick={handleClick2}>
          <div className="pro"> 
              <div className="pro2">
                  <h5 className="pro4">{list.name[0]+list.name[j]}</h5>
              </div>
              <div className="pro3">
        <h4>{list.name}</h4>
        <h5>{list.des}</h5>
        <h6>{list.email}</h6>
        </div>
        </div>
      </div>
      <div>
        <button
          className="btn btn-sm btn-danger but"
          onClick={() => {
            onDelete(list);
          }}
        >
          delete
        </button>
      </div>
      <hr></hr>
    </div>
    <div className="card" style={mySt}>
      <img src="businessperson-computer-icons-avatar-png-favpng-B8ky3XmC82yLn1QkdvZ17t1vC.jpg" style={{height:"100px",marginLeft:"200px",border:"2px solid black",marginTop:"10px" }} />
      <div style={{marginLeft:"150px"}}>
      <h4>{list.name}</h4>
      <h6>{list.des}</h6>
      <h6>{list.email}</h6>
      </div>
      <button
          className="btn btn-sm btn-danger but3"
          onClick={() => {
            onDelete(list);
          }}
        >
          delete
        </button>

      </div>
    </div>

  );
  }
