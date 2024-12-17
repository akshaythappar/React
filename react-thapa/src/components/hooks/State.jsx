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
console.log("parent component rendered ");

const handleButtonClick = () =>{

    //count++  // to directly update the value this is the against the rule alway use the fucntion provieded to update the value in this case the fucntion is useState 
    setCount(()=>count++);
}



  return (
    <>
    <section className="main-div">
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Click me</button>
      </section>
      <ChildComponent count={count}/>
    </>
  );
};


function ChildComponent({count}){
    console.log("child component rerendered")
   return  <div className="main-div">
      <h1>ChildComponent {count}</h1>
    </div>
    
}

// when consoling we are getting the value two times in the consolog.log why because of the bydefault stric mode of the reactr we can comment it fro the main.jsx  if we are making the project ready for the production then it will automaticaly gone 


export function Sibling(){
    console.log("sibling component rerendered")
   return  <div className="main-div">
      <h1>sibling component count</h1>
    </div>
    
}
