import { useState, useEffect } from "react";
import "../../Style/gestion.css";
import { useNavigate, Link } from "react-router-dom";

export const Crearhuerta = () => {

  const navigate = useNavigate();

  const [huertas, setHuertas] = useState([]);

  const [error, setError] = useState(false)

  const [huertaData, setHuertaData] = useState("");

  const getHuerta = async () => {
    const res = await fetch("http://localhost:4000/api/huertas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setHuertas(data);
    console.log(data);
  };

  useEffect(() => {
    getHuerta();
  }, []);

  const handleClick = async (id) => {
    navigate(`/TasksList/${id}`)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(huertaData);
    if (huertaData === "") {
      setError(true)
      return;
    }
    await fetch("http://localhost:4000/api/huertas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre: huertaData }),
    });
    setHuertaData("");
    getHuerta();
  };

  const handleChange = (e) => {
    setHuertaData(e.target.value);
  };

  return (
    <>
      <div className="body-gestion ">
        <form action="" onSubmit={handleSubmit}>
          <h1>Crear Huerta</h1>
          {error && <p className="error">No se puede enviar un campo vacio</p>}
          <input
            type="text"
            placeholder="Nombre de la huerta"
            value={huertaData}
            onChange={handleChange}
          />
          <button type="submit">Crear Huerta</button>
        </form>
        <div className="div-form">
          <h1>Lista de Huertas</h1>
          <ul>
            {huertas.length > 0 ? (
              huertas.map((huerta, id) => (

                <li key={id}>
                  <Link onClick={
                    (e) => {
                      e.preventDefault();
                      handleClick(huerta.id)
                    }
                  }>{huerta.nombre}</Link></li>
              ))
            ) : (
              <li>No hay huertas</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
