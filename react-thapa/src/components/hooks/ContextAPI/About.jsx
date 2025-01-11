import { useContext } from "react";
import { BioContext, useBioContext } from ".";
import { use } from "react";

export const About = () =>{
    // const {myName,myAge}= useBioContext();
    // const {myName,myAge}= useContext(BioContext);
    // const {myName,myAge}= use(BioContext);

    const newHook = true;
    let myName,myAge;
    if(newHook){
        const {myName,myAge}= use(BioContext)
    }

    
    return (
        <h1>Hello context API (About). My Name is {myName} and {myAge}</h1>
    )
}