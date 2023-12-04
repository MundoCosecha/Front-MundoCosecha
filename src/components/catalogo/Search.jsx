import React from "react";
import { useState } from "react";
import catalogo from "../../helpers/catalogo.json";

export const Search = () => {
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
    <>
      <div className="d-flex m-3">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-success " type="submit">
          Search
        </button>
      </div>
    </>
  );
};
