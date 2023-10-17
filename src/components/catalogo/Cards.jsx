import React from 'react'
import { Card } from './Card'
import catalogo from '../../helpers/catalogo.json'
export const Cards = () => {
    const { plantas } = JSON.parse(JSON.stringify(catalogo));
  return (
    <div className='d-flex flex-wrap justify-content-around align-items-center'>
         {
          plantas.map( (planta, i) => <Card key={i} planta={planta}/>)
        }
    </div>
  )
}
