import { useState } from "react"
import "./ToggleSwitch.css"

export const ToggleSwitch = () =>{
    let [value,setValue]=useState(0);
    const handleValue = ()=>{
        
        setValue(value?0:1);
    }
     return <>
     <h1>{value}</h1>
       <div className="parent" style={{backgroundColor:`${value?'green':'grey'}`}} onClick={handleValue}>
        <div className={`circle ${value?'right':'left'}`} style={{border:"4px solid grey",borderRadius:"50px"}}>
            <p>{value?'ON':'OFF'}</p>
        </div>
       </div>
     </>
}