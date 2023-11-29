import React from "react";
import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div className="d-flex flex-column align-items-center tasks-list">
      {tasks.length > 0 ? (
        tasks.map(({ title, id, done }) => (
          <Task key={id} title={title} id={id} done={done} />
        ))
      ) : (
        <p className="alert alert-warning col-11 text-center">
          Dont have any tasks
        </p>
      )}
    </div>
  );
};

export default Tasks;
