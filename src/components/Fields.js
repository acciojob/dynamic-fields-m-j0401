
import React, { useRef, useState } from "react";


const Fields=()=>{
   
   

   let data=useRef({
       name:{name},
       age:{age}
           })
   let{name,age}=data;

    let[inp,setInp]=useState([data])
   

   function delet(i,e){
    e.preventDefault();
    inp.filter((t,ind) => ind!=i ) }

function handleClick(){
    
    setInp([...inp,data])
    
}

   return <div>

  {  inp.map((v,i)=>
     <div key={i}>
     <input name="name" type="text" placeholder="Enter Name" ref={name}></input>
     <input name="age" type="number" placeholder="Enter age" ref={age} />
     <button onClick={()=>delet(i)}>Remove</button>
   </div>
  )}
         
     <button onClick={handleClick}>Add More...</button>
     <button onClick={()=>console.log(inp)}>Submit</button>

    </div>
}

export default Fields;