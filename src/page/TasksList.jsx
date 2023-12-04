import TaskGestion from "./TaskGestion";
import { NavbarGestion } from "../components/huertaListado/NavbarGestion";

export const TasksList = () => {
  return (
    <>
      <NavbarGestion />
      <TaskGestion />
    </>
  );
};
