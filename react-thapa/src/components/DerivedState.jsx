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
  return <div className="main-div">
    <h1>Users List</h1>
    <ul>
   { users.map((currElem,index)=>{
      return <li key={index}>{currElem.name}-{currElem.age} year old</li>
    })}
    </ul>

  </div>;
};
