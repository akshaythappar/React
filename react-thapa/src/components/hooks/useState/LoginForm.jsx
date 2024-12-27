import { useState } from "react"

export const LoginForm = () =>{
    const [user,setUser]=useState({username:"",password:"",});
    

     const handleFormSubmit = (e)=>{
        e.preventDefault();
       const loginData = {
        username:user.username,
        password:user.password,
       }

    // ecmascript rule says if the name and the value or the key and the value are same then you can write only one
       console.log(loginData);
     }
    return (
        <div className="container">
            <div className="card">
                <h1>Login Form</h1>
                <form action="" onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off" value={user.username} onChange={(e)=>setUser((prev)=>({...prev,[e.target.name]:e.target.value}))}/>

                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" required autoComplete="off" value={user.password} onChange={(e)=>setUser((prev)=>({...prev,[e.target.name]:e.target.value}))}/>

                    <button type="submit" >Login</button>
                </form>

            </div>
        </div>
    )
}