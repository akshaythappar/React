import { useState } from "react"

export const LoginForm = () =>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

     const handleFormSubmit = ()=>{
        // handle the form submission
        console.log("Username:",username);
        console.log("Password:",password);
        // reset the form fields
        setUsername("");
        setPassword("");
     }
    return (
        <div className="container">
            <div className="card">
                <h1>Login Form</h1>
                <form action="" >
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off" value={username} onChange={(e)=>setUsername(e.target.value)}/>

                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" required autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    <button type="submit" onClick={handleFormSubmit}>Login</button>
                </form>

            </div>
        </div>
    )
}