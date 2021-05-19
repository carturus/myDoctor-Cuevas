import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ItemCount =({initial, stock ,onAdd})=>{
    const [count, setCount] = useState(initial);
    const add=()=>{if((count<stock) && (stock>1)) setCount(count+1)}
    const remove=()=>{if(count<=stock && count>initial) setCount(count-1)}
    const handleClick =()=>onAdd(count)  
 const handleClick2=()=>{
     alert('Ya no hay suficiente stock')
 }

    return(

    <div className="card text-white bg-primary" style={{maxWidth:'8rem', maxHeight:'10rem'}}>
    <div className="card-body">
    <p>{count}</p>
    <button onClick={remove} className="btn btn-light">-</button>
    <button onClick={add} className="btn btn-light">+</button>
    </div>{
       stock>0?<button  onClick={handleClick} className="btn btn-light">Add</button>:<button onClick={handleClick2} className="btn btn-light">Add</button>
    }
  

</div>
        
     
      )   

}