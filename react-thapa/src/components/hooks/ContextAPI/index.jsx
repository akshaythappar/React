
// import { createContext, useContext } from "react";
import { createContext, use } from "react";

// Step 1
// it is not a variable it return the component thats why the first letter is capital
export const BioContext = createContext();

// 2nd step

export const BioProvider = ({ children }) => {
  const myName = "akshay";
  const myAge = 30;
  console.log(children);
  //   return <BioContext.Provider value={{myName:myName,myAge:myAge}}>{children}</BioContext.Provider>;
  // if keys and values are same then we do not need any key value pair we can write oly one
  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};


//custom hooks  
export const useBioContext = () =>{
  const context = use(BioContext);
  // if(!context){
  if(context===undefined){
    throw new Error("Component must be wrapped with BioProvider")
  }
  return context;
}