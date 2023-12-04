import React, { useState } from "react";

const Task = ({ id, title, done }) => {
  const [taskDone, setTaskDone] = useState(done);

  const handleDone = () => {
    setTaskDone(!taskDone);
  };

  return (
    <div
      className={`d-flex justify-content-between col-11 shadow m-auto my-3 ${
        taskDone ? "bg-success-subtle" : "bg-danger-subtle"
      }`}
    >
      <p className="m-auto">{title}</p>
      <button
        className={taskDone ? "btn btn-success" : "btn btn-danger"}
        onClick={handleDone}
        id={id}
      >
        {taskDone ? "Done" : "Not Done"}
      </button>
    </div>
  );
};

export default Task;
