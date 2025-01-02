import { useEffect, useState } from "react";
import "./index.css";

export const CleanUp = () => {
  const [count, setCount] = useState(0);

  // setInterval(()=>{
  //    setCount((prev)=>prev+1);
  // },1000);


  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return ()=>{
        clearInterval(timer);
    }
  
  }, []);

  
  return (
    <div className="container">
      <div className="counter">
        <p>My subscribers on You Tube</p>
        <div className="odometer" id="odometer">
          {count}
        </div>
        <h3 className="title">
          Subscribers <br /> Realtime Counter
        </h3>
      </div>
    </div>
  );
};
