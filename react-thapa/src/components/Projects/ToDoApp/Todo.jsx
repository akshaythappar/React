import { useEffect, useState } from "react";
import { MdCheck } from "react-icons/md";   
import { MdDeleteForever } from "react-icons/md";
import "./Todo.css"

export const Todo = () => {
    const [inputValue,setInputValue]=useState("");
    const [task,setTask]=useState([]);
    const[getDateTime,setDateTime]=useState("")
    

   
    const handleInputChange = (value)=>{
        setInputValue(value);
    }
    const handleFormSubmit = () =>{
        event.preventDefault();
        if(!inputValue) return ;
        
        // by defalut which you will pass in the place of previous will act as the previouse value
        // setTask((prev)=>console.log(prev));
        if(task.includes(inputValue))
            {
                setInputValue("");
                return
            } ;

        setTask((prevTask)=>[...prevTask,inputValue])

        setInputValue("");


    } 

    // this is first mehtod wihtout useEffect
     setInterval(() =>{
        // to Do date and time
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setDateTime(`${formattedDate} - ${formattedTime}`)
        
       }, 1000);



       useEffect(()=>{
        const interval = setInterval(() =>{
            // to Do date and time
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`)
            return ()=>clearInterval(interval);
           }, 1000);
       },[]);
      // we have to use this clearnup function to avoid the memeory leak useeffect provide the clean up funciton 

      const handleDeleteTodo = (value)=>{
       const updatedTask = task.filter((curTask)=>curTask!=value);
       setTask(updatedTask);
      }

      const handleClearButton = () =>{
        setTask([]);
      }
    return (
        <section className="todo-container">
            <header>
                {/* <h1>Todo List</h1> */}
                <h2 className="date-time">Date-Time {getDateTime}</h2>
            </header>
            <section className="form">
                <form action="" onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(event)=>handleInputChange(event.target.value)}/>
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">
                            Add Task
                        </button>
                    </div>
                </form>

            </section>

            <section className="myUnOrdList">
                <ul>
                
                {task.map((curTask,index) => {
                   return <li key={index} style={{color:"white"}} className="todo-item">
                      <span> {curTask}</span>   
                        <button className="check-btn">
                        <button>
                        <MdCheck />
                        </button>
                        </button>
                        {/* <button className="delete-btn" onClick={handleDeleteTodo(index)}></button> */}
                        {/* in the above line we can't pass the funciton like this if we have arguments to pass in the function this function will call automaticalyy without clcking the button to corerct this we will pass the callback funciton as specified in the below line"call me back" */}
                        <button className="delete-btn" onClick={()=>handleDeleteTodo(curTask)}>
                        <MdDeleteForever />
                        </button>
                        </li>
                    })}
                </ul>

                <section>
                    <button className="clear-btn" onClick={handleClearButton}>Clear All</button>
                </section>
            </section>
        </section>
    )
}