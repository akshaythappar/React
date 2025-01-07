// import "./index.css";

import { useRef } from "react";

export const UseRef = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
  

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(usernameRef.current.value);
        console.log(passwordRef.current.value);
    };
 
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input type="text" id="username" ref={usernameRef}/>
      <br />
      <input type="text" id="password"  ref={passwordRef} />
      <br />
      <button>Submit</button>
    </form>
  );
};
