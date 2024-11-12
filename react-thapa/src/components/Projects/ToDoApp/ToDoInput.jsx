import { useState } from "react";

export const ToDoInput = ({ content, setContent }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (localStorage.getItem(inputValue)) {
      alert("vale is already there ");
    } else {
      const obj = { text: inputValue, status: 0 };
      const newContent = [...content, obj];
      setContent(newContent);
      localStorage.setItem(inputValue, 0);
      setInputValue("");
    }
  };

  const handleClearAllValue = () => {
    localStorage.clear();
    setContent([]);
  };
  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={{ padding: "9px" }}
      />
      <button style={{ borderRadius: "0px" }} onClick={handleButtonClick}>
        Add Task
      </button>
      <button style={{ borderRadius: "0px" }} onClick={handleClearAllValue}>
        Clear all value
      </button>
    </div>
  );
};
