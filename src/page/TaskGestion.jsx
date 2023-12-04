import React, { useState } from "react";
import Form from "../components/huertaListado/Form";
import Tasks from "../components/huertaListado/Tasks";

const TaskGestion = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTasks = (task) => {
    setTasks([...tasks, { id: Date.now(), title: task, done: false }]);
  };

  return (
    <div className="d-flex flex-column home-container">
      <main className="d-flex flex-column flex-sm-row flex-lg-row justify-content-center align-items-center main-container">
        <section className="taskForm shadow col-11 col-sm-6 col-lg-6 d-flex justify-content-center align-items-center">
          <Form handleAddTasks={handleAddTasks} />
        </section>
        <section className="taskList mt-3  col-11 col-sm-6 col-lg-6">
          <Tasks tasks={tasks} />
        </section>
      </main>
    </div>
  );
};

export default TaskGestion;
