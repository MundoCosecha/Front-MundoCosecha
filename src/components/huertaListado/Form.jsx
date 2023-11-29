import React, { useState } from "react";

const Form = ({ handleAddTasks }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyCapture = (e) => {
    if (e.keyCode === 13) {
      handleAddTasks(inputValue);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      type="text border"
      placeholder="Add Task"
      onKeyUpCapture={handleKeyCapture}
      className="form-control m-2"
      onChange={handleInputChange}
      name="todo"
      value={inputValue}
    />
  );
};

export default Form;
