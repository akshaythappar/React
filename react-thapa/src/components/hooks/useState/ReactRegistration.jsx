import { useState } from "react";
import "./index.css";

export const RegistrationFromReact = () => {
    const [user,setUser]=useState({
 firstName:"",
        lastName:"",
        email:"",
        password:"",
        phoneNumber:"",
      });

    // const handleInputChange=(e)=>{
    //     switch(e.target.name){
    //         case "firstName":
    //             setFirstName(e.target.value);
    //             break;
    //         case "lastName":
    //             setLastName(e.target.value);
    //             break;
    //         case "email":
    //             setEmail(e.target.value);
    //             break;
    //         case "password":
    //             setPassword(e.target.value);
    //             break;
    //         case "phoneNumber":
    //             setPhoneNumber(e.target.value);
    //             break;
    //         default:
    //             break;
    //     }
    // }
    // or you can do like this

    
    const handleInputChange=(e)=>{
        const {name,value}=e.target;

        // setUser((kuchbhi)=>console.log(kuchbhi));
        setUser((prev)=>({...prev,[name]:value}));
  
    }

    const handleFormSubmit = (event)=>{
        event.preventDefault();
        // if the key and value are same then we no nedd to wrtite the two times we can write it only one time like below
        // const formData = {
        //     firstName,
        //     lastName,
        //     email,
        //     password,
        //     phoneNumber
        // }
        console.log(formData);

    }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>

          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            required
            value={user.firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>

          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            required
            value={user.lastName}
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required onChange={handleInputChange} value={user.email}/>

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          value={user.password}
          onChange={handleInputChange}
        />

        <label htmlFor="phone">
          <b>Phone Number</b>
        </label>
        <input type="phone" placeholder="9890764567" name="phoneNumber" required  value={user.phoneNumber} onChange={handleInputChange}/>

        <p>
          By Creating an Account you are agree to our
          <a href="" style={{ color: "dodgerblue" }}>
            Terms & Privacy
          </a>
        </p>

        <div>
          <button type="submit" className="btn">
            Sign Up
          </button>
        </div>

      </form>

      <section>
        <p>Hello, My name is <span>{user.firstName} {user.lastName}</span> .my email address is <span>{user.email}</span> and my phone number is <span>{user.phoneNumber}</span></p>
      </section>
    </>
  );
};
