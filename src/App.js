
import "./App.css";
import Header from "./MyComponents/Header";
import Lists from "./MyComponents/Lists";
import AddList from "./MyComponents/AddList";
import React, { useState } from 'react';

function App() {
  const onDelete=(list)=>{
   
    setLists(lists.filter((e)=>{
      return e!==list;
    }))
  }
  const addList=(name)=>{
    
    let sno
    if(lists.length===0)
    {
      sno=0

    }
    else
    {
      sno=lists[lists.length-1].sno+1;

    }
    const mylist={
      sno:sno,
      name:name,
    }
    setLists([...lists,mylist]);

  }
  const [lists, setLists]=useState([
    {
      sno:1,
      name:"Chilman Mehrotra",
      des:"Client Manager"
    },
    {
      sno:2,
      name:"Saboor Sirwal",
      des:"Recruitment Success"
    },
    {
      sno:3,
      name:"Smriti Wadhwa",
      des:""
    }
  ])
  const [searchTerm, setSearchTerm]=useState("")
  const [searchResults, setSearchResults]=useState([])
  const searchHandler=(searchTerm)=>{
  setSearchTerm(searchTerm)
  if(searchTerm!==""){
    const newList=lists.filter((list)=>{
      return Object.values(list).join(" ").toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    })
    setSearchResults(newList)
  }
  else{
    setSearchResults(lists)
  }

  }

  return (
  <>

  <Header/>
  <AddList addList={addList} />
  <Lists lists={searchTerm.length<1 ? lists:searchResults} onDelete={onDelete} term={searchTerm} searchKeyword={searchHandler}/>
  </>
  );
}

export default App;
