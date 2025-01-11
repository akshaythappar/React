import { useBioContext } from ".";

export const Service = () =>{
    const {myName,myAge}= useBioContext();
    
    return (
        <h1>Hello context API (Service). My Name is {myName} and {myAge}</h1>
    )
}