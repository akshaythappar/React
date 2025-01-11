import { useContext } from "react";
import { BioContext } from ".";

export const About = () =>{
    const {myName,myAge}= useContext(BioContext);
    
    return (
        <h1>Hello context API (About). My Name is {myName} and {myAge}</h1>
    )
}