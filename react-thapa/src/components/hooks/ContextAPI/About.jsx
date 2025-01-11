import { useBioContext } from ".";

export const About = () =>{
    const {myName,myAge}= useBioContext();
    
    return (
        <h1>Hello context API (About). My Name is {myName} and {myAge}</h1>
    )
}