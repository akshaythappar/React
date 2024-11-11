import { useState } from "react";

// const users = 
import "./EV.css";
export const DerivedState = () => {
    const [users,setUsers]=useState([
      {name:"Alice",age:25},
      {name:"Bob",age:30},
      {name:"Charlie",age:35},
      {name:"Angles",age:45},
    ]);
    const userCount = users.length;  // so when our variable depends on the state or props then it is known as derived state 
    const averageAge = users.reduce((accum,currElem)=>accum+currElem.age,0)/userCount;


  return <div className="main-div">
    <h1>Users List</h1>
    <ul>
   { users.map((currElem,index)=>{
      return <li key={index}>{currElem.name}-{currElem.age} year old</li>
    })}
    </ul>
    <p>User Count: {userCount}</p>
    <p>Average: {averageAge}</p>
    


  </div>;
};
