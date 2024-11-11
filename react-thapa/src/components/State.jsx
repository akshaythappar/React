import { useState } from "react";
import "./EV.css";

export const State = () => {
  // var value= 0;
  // const handleButtonClick = () =>{
  //     value++;
  //     console.log(value);
  // }


//   console.log(useState());

// let array = useState();
// console.log(array);   // we will same value as above

// destructuring the array 

let [count, setCount] = useState(0);

const handleButtonClick = () =>{

    //count++  // to directly update the value this is the against the rule alway use the fucntion provieded to update the value in this case the fucntion is useState 
    setCount(()=>count++);
}



  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Click me</button>
    </>
  );
};
