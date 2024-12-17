import { useState } from "react";


const ShortCircuitExample = () =>{

    const [isLoggedIn,setIsLoggedIn] =useState(true);
    const [user,setUser]=useState("");

    return (
        <section className="container short-container">
            <h1>
                Welcome to the short circuit evaluation!
            </h1>
          { isLoggedIn  && <p>You are logged in !</p>}

          {user ? `Hello ${user}` : "You are logged in!"}

            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
                <button style={{color:"black"}} onClick={()=>setIsLoggedIn(!isLoggedIn)}>Toggle login state</button>
                <button style={{color:"black"}} onClick={()=>setUser("akshay thappar")}>Set User</button>
                <button style={{color:"black"}} onClick={()=>setUser("")}>Clear User</button>
            </div>
        </section>
    )
}

export default ShortCircuitExample;