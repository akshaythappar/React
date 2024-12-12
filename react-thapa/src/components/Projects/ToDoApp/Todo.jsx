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
        const {id,content,checked}=inputValue;

        // to check if the input field is empty or not
        if(!content) return ;
        
        // by defalut which you will pass in the place of previous will act as the previouse value
        // setTask((prev)=>console.log(prev));
        // to check if the data is already existing or not
        const ifTodoContentMatched = task.find((currTask)=> currTask.content===content);
        if(ifTodoContentMatched) return;
         
        setTask((prevTask)=>[...prevTask,{id,content,checked}]);

        


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
       const updatedTask = task.filter((curTask)=>curTask.content!=value);
       setTask(updatedTask);
      }

      const handleClearButton = () =>{
        setTask([]);
      }

      const handleCheckedTodo = (content)=>{
        const updatedTask = task.map((curTask)=>{if(curTask.content===content) 
          {
            return {...curTask,checked:!curTask.checked}
          }else{
            return curTask;
          }
        });
        setTask(updatedTask);
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
                  return  <TodoList data={curTask.content} key={curTask.id} onHandleDeleteTodo={handleDeleteTodo} onHandleCheckedTodo={handleCheckedTodo} checked={curTask.checked}/>
                    })}
                </ul>

                <section>
                    <button className="clear-btn" onClick={handleClearButton}>Clear All</button>
                </section>
            </section>
        </section>
    )
}