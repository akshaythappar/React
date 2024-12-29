import { useState } from "react"

export const ContactForm = ()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");

    const handleFormSubmit = (e)=>{ 
        e.preventDefault(); 
       const formDate = {
        username,
        password,
        message
       }
       console.log(formDate);
    }
    return (
        <>
        
        <div className="container">
            <div className="card">
                <h1>Contact Form</h1>
                <form action="" onSubmit={handleFormSubmit}>
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" required autoComplete="off" onChange={(e)=>setUsername(e.target.value)} />

                    <label htmlFor="password">UserName</label>
                    <input type="text" name="password" required autoComplete="off" onChange={(e)=>setPassword(e.target.value)}/>

                    <label htmlFor="message">Message</label>
                    <textarea name="message" type="password" required autoComplete="off" rows="6" onChange={(e)=>setMessage(e.target.value)}></textarea>

                    <button>submit</button>
                </form>
            </div>
        </div>
        </>
    )
}