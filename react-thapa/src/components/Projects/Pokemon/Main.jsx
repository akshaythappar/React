import { useEffect, useState } from "react";
import "./main.css";
import { Card } from "./card";

export const MainComponent = () => {
  const [firstApiData, setFirstApiData] = useState(null);
  const [apiUrls, setApiUrls] = useState([]);
  const [content, setContent] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const firstApiUrl = "https://pokeapi.co/api/v2/pokemon";

  const callApiFunction = async () => {
    const response = await fetch(firstApiUrl);
    const data = await response.json();
    setFirstApiData(data.results);
    console.log("first api data is set");
  };

  useEffect(() => {
    callApiFunction();
  }, []);

  useEffect(() => {
    if (firstApiData) {
      let arr = [];
      firstApiData.map((elem) => {
        arr.push(elem.url);
      });
      setApiUrls(arr);
      console.log("api urls are set");
    }
  }, [firstApiData]);

  const fetchData = async () => {
    const promises = apiUrls.map(async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    });
    const results = await Promise.all(promises);
    setContent(results);
    console.log("content is set");
    console.log(results);
  };
  useEffect(() => {
    if (apiUrls.length > 0) {
      fetchData();
    }
  }, [apiUrls]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  if (!firstApiData) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <div className="parent">
        <div>
          <h1>Lets Catach Pokemon App</h1>
          <input type="text" onChange={(e)=>handleInputChange(e.target.value)}  value={inputValue}/>
        </div>

        <div className="content">
            {content.filter((elem)=>{return elem.name.includes(inputValue)}).map((elem) => {
            return <Card elem={elem} key={elem.speed} />
            })}
          
        </div>
      </div>
    </>
  );
};
