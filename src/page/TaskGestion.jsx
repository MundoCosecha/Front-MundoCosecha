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
    const res = await fetch("http://localhost:4000/api/tareas/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setTasks(data);
    console.log(data);
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
        <form action="" onSubmit={handleSubmit}>
          <h1>Crear Tarea</h1>
          {error && <p className="error">No se puede enviar un campo vacio</p>}
          <input
            type="text"
            placeholder="Nombre de la Tarea"
            value={tasksData}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Descripcion de la tarea"
            value={tasksDes}
            onChange={handleChangeDes}
          />
          <button type="submit">Crear Tarea</button>
        </form>
        <div className="div-form">
          <h1>Lista de Huertas</h1>
          <ul>
            {tasks.length > 0 ? (
              tasks.map((task, id) => (
                <li key={id}>
                  {task.nombre}
                  - {task.descripcion}
                </li>
              ))
            ) : (
              <li>No hay Tareas</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TaskGestion;
