import { useEffect } from "react";
import "./index.css";

export const ReactuseEffect = () =>{
    useEffect(()=>{
        console.log("hello useEffect");
    },[]);
    return (
        <div>
            <h1>Hello useEffect!</h1>
        </div>
    )
}