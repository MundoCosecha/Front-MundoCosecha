import React from "react";
import { Card } from "./Card";

export const Cards = ({ plantas }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center">
      {plantas.map((planta, i) => (
        <Card key={i} planta={planta} index={i} />
      ))}
    </div>
  );
};
