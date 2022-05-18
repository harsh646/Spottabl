import React,{useRef} from 'react'
import { useState } from 'react';
import ListItem from "../MyComponents/ListItem";

export default function Lists(props) {
  const inputEl=useRef("")
  const getSearchTerm=()=>{
    props.searchKeyword(inputEl.current.value)
  }
  const[myStyle,setMyStyle]=useState({
    display:"none"
  })
  const handleClick=()=>{
    if(myStyle.display==="none")
    {
      setMyStyle({
      display:"block"
    })
  }
  else{
    setMyStyle({
      display:"none"
    })
  }

  }
 
  return (
    <div className='con3'>
      <button onClick={handleClick} className="b2"><img className="ib" alt="description"  src="1024px-Search_Icon.svg.png" /></button>
      <input style={myStyle} ref={inputEl} type="text" className="form-control" id="name" placeholder='SEARCH'  value={props.term} onChange={getSearchTerm} />
      <div className='con8'>
      {props.lists.length===0?"No member to display":
      props.lists.map((list)=>{
        return (<ListItem list={list} key={list.sno}onDelete={props.onDelete}/>)

      })
        }
        </div>
    </div>
  )
}
