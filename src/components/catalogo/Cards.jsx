import React from "react";
import { useState } from "react";
import { Card } from "./Card";
import catalogo from "../../helpers/catalogo.json";
export const Cards = () => {
  const { plantas } = JSON.parse(JSON.stringify(catalogo));

  const [search, setSearch] = useState({
    nombre: "all",
    tipo: "all",
    especie: "all",
  });

  const filtroPlantas = (plantas) => {
    return plantas.filter((plantas) => {
      return (
        plantas.nombre.toLowerCase() === search.nombre.toLowerCase() &&
        (plantas.especie.toLowerCase() === search.especie.toLowerCase() ||
          search.especie === "all") &&
        (plantas.tipo.toLowerCase() === search.tipo.toLowerCase() ||
          search.tipo === "all")
      );
    });
  };
  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center">
      {plantas.map((planta, i) => (
        <Card key={i} planta={planta} index={i} />
      ))}
    </div>
  );
};
