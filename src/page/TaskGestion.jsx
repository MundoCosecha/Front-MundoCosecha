import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const TaskGestion = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(false)
  const [tasksData, setTasksData] = useState("");
  const [tasksDes, setTasksDes] = useState("");
  const { id } = useParams();
  const getTasks = async () => {
    const res = await fetch(`http://localhost:4000/api/tareas/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setTasks(data);
    console.log(data);
  }

  const handleClick = async (id) => {
    await fetch(`http://localhost:4000/api/tareas/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getTasks();
  }

  useEffect(() => {
    getTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tasksData === "") {
      setError(true)
      return;
    }
    await fetch("http://localhost:4000/api/tareas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre: tasksData, descripcion: tasksDes, huertaId: id }),
    });
    setTasksData("");
    getTasks();
  }

  const handleChange = (e) => {
    setTasksData(e.target.value);
  }

  const handleChangeDes = (e) => {
    setTasksDes(e.target.value);
  }

  return (
    <>
      <div className="body-gestion ">
        <form className="d-flex justify-content-center align-items-center flex-column m-3 " action="" onSubmit={handleSubmit}>
          <h1 className="text-dark m-3">Crear Tarea</h1>
          {error && <p className="error">No se puede enviar un campo vacio</p>}
          <input
          className="m-3"
            type="text"
            placeholder="Nombre de la Tarea"
            value={tasksData}
            onChange={handleChange}
          />
          <input
          className="m-3"
            type="text"
            placeholder="Descripcion de la tarea"
            value={tasksDes}
            onChange={handleChangeDes}
          />
          <button type="submit ">Crear Tarea</button>
        </form>
        <div className="div-form overflow-auto">
          <h1 className="text-dark">Lista de Tareas</h1>
          <ul className=" overflow-auto" >
            {tasks.length > 0 ? (
              tasks.map((task, id) => (
                <li className="text-dark" key={id}>
                  {task.nombre}
                  - {task.descripcion}
                <button className="btn btn-danger m-3" onClick={() => handleClick(task.id)}>Eliminar</button>
                </li>
              ))
            ) : (
              <li className="text-dark">No hay Tareas</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TaskGestion;
