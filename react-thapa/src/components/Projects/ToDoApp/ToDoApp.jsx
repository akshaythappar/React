import { useState, useEffect } from "react";

import "./ToDoApp.css";
import { ToDoContent } from "./ToDoContent";
import { ToDoInput } from "./ToDoInput";

export const ToDoApp = () => {
  const [content, setContent] = useState([]);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = Object.keys(localStorage).map((key) => {
      //   JSON.parse(localStorage.getItem(key))
      return { text: key, status: localStorage.getItem(key) };
    });
    setContent(storedTasks);
  }, []);

  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <ToDoInput content={content} setContent={setContent} />
        <ToDoContent content={content} setContent={setContent} />
      </div>
    </>
  );
};
