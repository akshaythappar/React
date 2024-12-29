import { useState } from "react"

export const ContactForm = ()=>{
     const [contact,setContacts]=useState({
        username:"",
        email:"",
        message:"",
     })

     const handleInputChange = (e)=>{
        const {name,value}=e.target;
        // setContacts({...contact,[name]:value});
        setContacts((prev)=>({
            ...prev,[name]:value,
        }))
     }

    const handleFormSubmit = (e)=>{
       e.preventDefault();
       // if the key and value are same then not need to write both the value
    
       console.log(contact);

    }



    return (
        <>
        
        <div className="container">
            <div className="card">
                <h1>Contact Form</h1>
                <form action="" onSubmit={handleFormSubmit}>
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" required autoComplete="off" onChange={handleInputChange}  value={contact.username}/>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required autoComplete="off" onChange={handleInputChange} value={contact.email}/>

                    <label htmlFor="message">Message</label>
                    <textarea name="message" type="password" required autoComplete="off" rows="6" onChange={handleInputChange} value={contact.message}></textarea>

                    <button>submit</button>
                </form>
            </div>
        </div>
        </>
    )
}