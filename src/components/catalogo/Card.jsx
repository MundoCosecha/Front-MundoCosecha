import React from 'react';
import '../../Style/card.css'

export const Card = ({ planta, index }) => {
  const modalId = `modal-${index}`; // Genera un id único para cada planta

  return (
    <div className="shadow col-12 col-sm-8 col-lg-5 d-flex flex-column flex-sm-row flex-lg-row my-3 bg-light">
      <div className="col-12 col-sm-4 col-lg-4 shadow" >
        <img src={planta.imagen} className='img-fluid' style={{ height: '10rem', width: '15rem'}}/>
      </div>
      <div className="col-12 col-sm-8 col-lg-8 d-flex flex-column justify-content-between ">
        <h5 className="text-center">{planta.nombre}</h5>
        <p className="text-center small">{planta.tipo}</p>
        <button className="btn btn-success ver-mas" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>Ver mas</button>
      </div>

      <div className="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">{planta.nombre}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column">
              <img className="img-fluid m-auto" src={planta.imagen}></img>
              <h5 className="text-center">{planta.especie}</h5>
              <h5 className="text-center">{planta.tipo}</h5>
              <p className="text-center text-muted">{planta.descripcion}</p>
              <h4 className='text-muted'>Requerimientos</h4>
              <p className='text-muted'>Regado: {planta.requerimientos.agua}</p>
              <p className='text-muted'>Luz: {planta.requerimientos.luz}</p>
              <p className='text-muted'>Suelo: {planta.requerimientos.suelo}</p>
              <h4 className='text-muted'>Cuidados</h4>
              <p className='text-muted'>{planta.cuidados}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
