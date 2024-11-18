import { useState } from "react";
import { MdCheck } from "react-icons/md";   
import { MdDeleteForever } from "react-icons/md";
import "./Todo.css"

export const Todo = () => {
    const [inputValue,setInputValue]=useState("");
    const [task,setTask]=useState([]);
    const [time,setTime]=useState("");

    const handleTime = () =>{
        let time=new Date()
        let hour=time.getHours();
        let minute=time.getMinutes();
        let seconds=time.getSeconds();
        time=hour+ ":" + minute + ":" + seconds;
        setTime(time);
    }
    setInterval(()=>{
        handleTime();
    },100)
  
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
    

    return (
        <section className="todo-container">
            <header>
                {/* <h1>Todo List</h1> */}
            </header>
            <section className="time">
              {time}
            </section>
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
                        <button className="delete-btn">
                        <MdDeleteForever />
                        </button>
                        </li>
                    })}
                </ul>
            </section>
        </section>
    )
}