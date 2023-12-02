import { useEffect, useState } from "react";
import "../../Style/gestion.css";

export const Crearhuerta = () => {
  const [huerta, setHuerta] = useState([]);

  const [huertaData, setHuertaData] = useState({
    nombre: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:4000/api/huertas", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const fetchedData = await res.json();
        setHuerta(fetchedData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(huertaData);
    if (!huertaData) {
      return;
    }
    await fetch("http://localhost:4000/api/huertas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(huertaData),
    });
  };

  const handleChange = (e) => {
    setHuertaData(e.target.value);
  };

  return (
    <>
      <div className="body-gestion ">
        <form action="" onSubmit={handleSubmit}>
          <h1>Crear Huerta</h1>
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
            {huerta.length > 0 ? (
              huerta.map((huertaItem) => (
                <li key={huertaItem.id}>{huertaItem.nombre}</li>
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
