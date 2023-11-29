import "../Style/Calendar.css";
import { Crearhuerta } from "../components/huertaListado/CrearHuerta";
import { NavbarGestion } from "../components/huertaListado/NavbarGestion";

export const Gestion = () => {
  return (
    <>
      <NavbarGestion />
      <Crearhuerta />
    </>
  );
};
