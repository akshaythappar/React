import { useId } from "react"

// This is breaking the principal of DRY do not repeat yourself 
// export const  UseID = ()=>{
//     const usernameId=useId();
//     const emailId=useId();
//     const passwordId=useId();
//     return (
//         <form action="">
//             <div>
//                 <label htmlFor={usernameId}>Username:</label>
//                 <input type="text" name="name" id={usernameId}/>
//             </div>
//             <div>
//                 <label htmlFor={passwordId}>Password:</label>
//                 <input type="text" name="name" id={passwordId}/>
//             </div>
//             <div>
//                 <label htmlFor={emailId}>Email:</label>
//                 <input type="email" name="email"  id={emailId}/>
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

// This lets you avoid calling useId() for every single element that needs unique id 
export const  UseID = ()=>{
    const id=useId();
    
    return (
        <form action="">
            <div>
                <label htmlFor={id + "usernameId"}>Username:</label>
                <input type="text" name="name" id={id + "usernameId"}/>
            </div>
            <div>
                <label htmlFor={ id + "passwordId"}>Password:</label>
                <input type="text" name="name" id={id + "passwordId"}/>
            </div>
            <div>
                <label htmlFor={id + "emailId"}>Email:</label>
                <input type="email" name="email"  id={id + "emailId"}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}