import { useEffect, useState } from "react";
import { MdCheck } from "react-icons/md";   
import { MdDeleteForever } from "react-icons/md";
import "./Todo.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
    
    const [task,setTask]=useState([]);
    
    

    const handleFormSubmit = (inputValue) =>{
        
        if(!inputValue) return ;
        
        // by defalut which you will pass in the place of previous will act as the previouse value
        // setTask((prev)=>console.log(prev));
        if(task.includes(inputValue)) return;
         
        setTask((prevTask)=>[...prevTask,inputValue])

        


    } 
   

    // this is first mehtod wihtout useEffect
     setInterval(() =>{
        // to Do date and time
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setDateTime(`${formattedDate} - ${formattedTime}`)
        
       }, 1000);



     
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
                <h1>Todo List</h1>
                <TodoDate/>
            </header>
            {/* <section className="form">
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

            </section> */}
            <TodoForm onAddTodo={handleFormSubmit}/>

            <section className="myUnOrdList">
                <ul>
                
                {task.map((curTask,index) => {
                   <TodoList curTask={curTask} key={index} onHandleDeleteTodo={handleDeleteTodo}/>
                    })}
                </ul>

                <section>
                    <button className="clear-btn" onClick={handleClearButton}>Clear All</button>
                </section>
            </section>
        </section>
    )
}