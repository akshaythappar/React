import { use } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();
// this above line is not a single variable it is a object that's why its first letter is capital also

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const handleToggleTheme = () => {
    return setTheme((prevTheme)=>(prevTheme==="dark"?"light":"dark")); 
  };
  return (
    <ThemeContext.Provider value={{ theme,handleToggleTheme }}>{children}</ThemeContext.Provider>
  );
};

// creatring a component

export const DarkLightThapa = () => {
    const {theme,handleToggleTheme}=use(ThemeContext);

  return (
    <>
    <div className={`p-4 flex`} style={{background:`${theme=="dark"?"black":"white"}`, height:"100vh", width:"100vw", color:`${theme=="dark"?"white":"black"}`}}>
      <h1>Dark Light mode website</h1>
      <p>Hello React 19</p>
      {/* <button onClick={handleToggleTheme}>switch to {theme=="dark"?"light":"dark"} mode</button> */}
      <button onClick={handleToggleTheme}>{theme==="dark"?"Switch to light mode":"Switch to Dark Mode"}</button>
      </div>
    </>
  );
};
