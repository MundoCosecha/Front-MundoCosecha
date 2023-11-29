import "../../Style/gestion.css";

export const Crearhuerta = () => {
  return (
    <>
      <div className="body-gestion ">
        <div className="div-form">
          <h1>Crear Tu Huerta</h1>
          <input type="text" placeholder="Nombre de la huerta" />
          <button type="submit">Crear Huerta</button>
        </div>
        <div className="div-form">
          <h1>Lista de Huertas</h1>
          <ul>
            <li>Huerta 1</li>
            <li>Huerta 2</li>
            <li>Huerta 3</li>
          </ul>
        </div>
      </div>
    </>
  );
};
