import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({data,onHandleDeleteTodo,onHandleCheckedTodo,checked}) => {
  return (
    <li  style={{ color: "black" }} className="todo-item">
      <span style={{color:"black"}} className={checked?"checkList":"notCheckList"}> {data}</span>
      <button className="check-btn">
        <button onClick={()=>onHandleCheckedTodo(data)}>
          <MdCheck/>
        </button>
      </button>
      {/* <button className="delete-btn" onClick={handleDeleteTodo(index)}></button> */}
      {/* in the above line we can't pass the funciton like this if we have arguments to pass in the function this function will call automaticalyy without clcking the button to corerct this we will pass the callback funciton as specified in the below line"call me back" */}
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
