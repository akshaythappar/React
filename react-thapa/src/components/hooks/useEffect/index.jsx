import { useEffect, useState } from "react";
import "./index.css";

export const ReactuseEffect = () =>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Count Value:" + count);
    },[count]);
    return (
        <div className="container effect-container">
            <h1>useEffect Hook</h1>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            
        </div>
    )
}