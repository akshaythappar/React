import { useContext } from "react";
import { BioContext } from ".";

export const Home = () =>{
    const {myName,myAge}= useContext(BioContext);
    
    return (
        <h1>Hello context API. My Name is {myName} and {myAge}</h1>
    )
}