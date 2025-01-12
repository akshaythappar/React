import { useState } from "react"

export const DarkLight = () =>{
    const [light,setLight]=useState(true);
    const handleButtonClick = ()=>{
        document.body.style.backgroundColor=light?"white":"black";
        document.body.style.color=light?"black":"white";
        setLight((prevlight)=>!prevlight);
     }
    
    return (
         <div>
            <button onClick={handleButtonClick}>
               Switch to {light?"Dark":"Light"} mode
            </button>
         </div>
    );
}