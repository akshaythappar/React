import "./EV.css";

export const EventHandling = () => {
  // Traditional Function
  //  function handleButtonClick(){
  //     alert(" i am clicked");
  //  }

  // Fat arrow function
  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    alert("Hey i an onClick event");
  };

  const handleWelcomeUser=(user)=>{
    console.log(`Welcom ${user}`);
  }

  return (
    <>
      {/* Funciton Component with named function  */}
      {/* Remember how we haven't called this function, if you call this function here  then it will run without even clicking. You just need to pass reference and not call here. */}
      <button onClick={handleButtonClick}>click me</button>
      <br />
      {/* when we are calling the fucntion using this fat arrow method then react not pass the event object by default we have to pass it explicitly */}
      {/* In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly in the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler function. This is because the arrow function creates a new function and calls your handler without passing any arguments. */}

      <button onClick={(event) => handleButtonClick(event)}>click me 2</button>   
      {/* this above is a callback function  */}

      {/* Inline Event Handlers  */}
      <button onClick={(event)=>console.log(event)}>Invline Function</button>

      {/* Function component with inline arrow functions  */}
      <button onClick={()=>alert("hey i am inline arrow funciton")}>Inline arrow function</button>

      {/* Passing arguments to event handlers  */}
      {/* if i want to pass the arguemtn in the funcion then i can't use this named function method  */}
      {/* <button onClick={handleWelcomeUser("akshay")}>Welcome User</button> */}
      {/* I have to use the fat arrow function method for this  */}

      <button onClick={()=>handleWelcomeUser("akshay")}>Welcome User</button>
      {/* the value which we are passing during fucntion call that is known as argument and when we are receiving it in the functjon then it is known as paramenter  */}


      



      
    
    </>
  );
};
