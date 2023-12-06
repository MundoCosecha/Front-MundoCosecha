import TaskGestion from "./TaskGestion";
import { NavbarGestion } from "../components/huertaListado/NavbarGestion";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const TasksList = () => {

  const { id } = useParams();

  const [huerta, setHuerta] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:4000/api/huertas/${id}`, {
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
  }, [id]);

  return (
    <>
      <NavbarGestion />
      <h1>{huerta.nombre}</h1>
      <TaskGestion />
    </>
  );
};
