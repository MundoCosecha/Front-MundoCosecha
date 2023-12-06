import React, { useState } from "react";
import catalogo from "../../helpers/catalogo.json";
import { Cards } from "./Cards";

export const Search = () => {
  const { plantas } = JSON.parse(JSON.stringify(catalogo));
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredPlants = plantas.filter((planta) => {
      const lowerCaseNombre = planta.nombre.toLowerCase();
      const lowerCaseTipo = planta.tipo.toLowerCase();
      const lowerCaseEspecie = planta.especie.toLowerCase();

      return (
        lowerCaseNombre.includes(lowerCaseSearchTerm) ||
        lowerCaseTipo.includes(lowerCaseSearchTerm) ||
        lowerCaseEspecie.includes(lowerCaseSearchTerm)
      );
    });

    setFilteredPlants(filteredPlants);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="d-flex m-3">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="btn btn-success"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <Cards plantas={filteredPlants.length > 0 ? filteredPlants : plantas} />
    </>
  );
};
