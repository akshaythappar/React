import { useState } from "react"

export const ContactForm = ()=>{
    const [contactData,setContactData] =useState({username:"",password:"",message:"",});

    const handleFormSubmit = (e)=>{ 
        e.preventDefault(); 
       const formDate = {
        username:contactData.username,
        password:contactData.password,
        message:contactData.message,
       }
       console.log(formDate);
    }

    const handleOnchange = (e) =>{
       const {name,value}= e.target;
       setContactData((prev)=>({...prev,[name]:value}));
    }
    return (
        <>
        
        <div className="container">
            <div className="card">
                <h1>Contact Form</h1>
                <form action="" onSubmit={handleFormSubmit}>
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" required autoComplete="off" onChange={(e)=>handleOnchange(e)}  value={contactData.username}/>

                    <label htmlFor="password">UserName</label>
                    <input type="text" name="password" required autoComplete="off" onChange={(e)=>handleOnchange(e)} value={contactData.password}/>

                    <label htmlFor="message">Message</label>
                    <textarea name="message" type="password" required autoComplete="off" rows="6" onChange={(e)=>handleOnchange(e)} value={contactData.message}></textarea>

                    <button>submit</button>
                </form>
            </div>
        </div>
        </>
    )
}