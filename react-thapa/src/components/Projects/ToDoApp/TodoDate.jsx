import { useEffect, useState } from "react";

export const TodoDate = () =>{
    const[getDateTime,setDateTime]=useState("")
    useEffect(()=>{
        const interval = setInterval(() =>{
            // to Do date and time
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`)
            return ()=>clearInterval(interval);
           }, 1000);
       },[]);

    
    return <h2 className="date-time">Date-Time {getDateTime}</h2>
}