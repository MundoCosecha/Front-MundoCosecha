import React from 'react'

export const Card = ({planta}) => {
  return (
    <div className="shadow col-12 col-sm-8 col-lg-5 d-flex flex-column flex-sm-row flex-lg-row my-3">
    <div className="col-12 col-sm-4 col-lg-4 shadow">{planta.imagen}</div>
    <div className="col-12 col-sm-8 col-lg-8 d-flex flex-column">
      <h5 className="text-center">{planta.nombre}</h5>
      <p className="text-center">{planta.tipo}</p>
      <button className="btn btn-primary">Ver mas</button>
    </div>
  </div>  
  )
}
