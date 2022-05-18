import React from "react";

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
  console.log(j);
  return (
    <div className="fl">
      <div className="con4">
          <div className="pro"> 
              <div className="pro2">
                  <h5 className="pro4">{list.name[0]+list.name[j]}</h5>
              </div>
              <div className="pro3">
        <h4>{list.name}</h4>
        <h6>{list.des}</h6>
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
  );
}
