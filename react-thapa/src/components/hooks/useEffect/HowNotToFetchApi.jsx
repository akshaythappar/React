import { useEffect, useState } from "react";
import "./Pokemon.css";

export const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) =>{
         setApiData(data)
        })
    .catch((err) => console.log(err));
  },[])



  return (
    <div className="container effect-container">
      <ul>
        data:
        {apiData.map((currData) => {
          return <li key={currData.id}>{currData.title}</li>;
        })}
      </ul>
    </div>
  );
};
