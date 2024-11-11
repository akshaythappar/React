import "./EV.css";

const users = [
  {name:"Alice",age:25},
  {name:"Bob",age:30},
  {name:"Charlie",age:35},
  {name:"Angles",age:45},
]

export const DerivedState = () => {
  return <div className="main-div">
    <h1>Users List</h1>
    <ul>
   { users.map((currElem,index)=>{
      return <li key={index}>{currElem.name}-{currElem.age} year old</li>
    })}
    </ul>

  </div>;
};
