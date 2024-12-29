import { useState } from "react"

export const ContactForm = ()=>{
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");

    const handleFormSubmit = (e)=>{
       e.preventDefault();
       // if the key and value are same then not need to write both the value
       const contactDate = {
        username,
        email,
        message
       }
       console.log(contactDate);

    }

    return (
        <>
        
        <div className="container">
            <div className="card">
                <h1>Contact Form</h1>
                <form action="" onSubmit={handleFormSubmit}>
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" required autoComplete="off" onChange={(e)=>setUsername(e.target.value)}  value={username}/>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required autoComplete="off" onChange={(e)=>setEmail(e.target.value)} value={email}/>

                    <label htmlFor="message">Message</label>
                    <textarea name="message" type="password" required autoComplete="off" rows="6" onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>

                    <button>submit</button>
                </form>
            </div>
        </div>
        </>
    )
}