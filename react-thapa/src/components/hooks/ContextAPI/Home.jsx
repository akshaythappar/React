
import { useBioContext } from ".";

export const Home = () =>{
    const {myName,myAge}= useBioContext();
    
    return (
        <h1>Hello context API. My Name is {myName} and {myAge}</h1>
    )
}