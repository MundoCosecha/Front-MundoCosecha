import { Navbar } from "../components/Navbar";
import "../Style/Compost.css";

export const Compost = () => {
  return <>

    <Navbar />

<div className="d-flex flex-row">



    <div className="d-flex flex-column justify-content-center  align-items-center w-75">

        <h2 className="text-center m-3 text-dark text-decoration-underline" >Creación de Compost y Sus Beneficios</h2>
    <ul className='list-group list-group-flush'>

    <li className="list-group-item m-3">

    <section>
        <h2>1. Selección de materiales</h2>
        <p>Utiliza una mezcla equilibrada de materiales verdes (ricos en nitrógeno) y materiales marrones (ricos en carbono). Materiales verdes incluyen restos de cocina como cáscaras de frutas y verduras, mientras que materiales marrones incluyen hojas secas y ramas pequeñas.</p>
    </section>

    </li>
    <li className="list-group-item m-3">
    <section>
        <h2>2. Tamaño y ubicación del compostero</h2>
        <p>Elige un lugar adecuado para tu compostero, preferiblemente en un área sombreada. Asegúrate de que sea lo suficientemente grande para permitir la mezcla y rotación de los materiales. Un compostero de al menos 3 pies por 3 pies es una buena opción.</p>
    </section>

    </li>
    <li className="list-group-item m-3">

    <section>
        <h2>3. Capas y mezcla</h2>
        <p>Alterna capas de materiales verdes y marrones para mantener un equilibrio adecuado. Mezcla los materiales regularmente para promover la descomposición y la aireación. Un compost bien mezclado se descompone más eficientemente.</p>
    </section>
    </li>
    <li className="list-group-item m-3">

    <section>
        <h2>4. Control de la humedad</h2>
        <p>Asegúrate de que el compost tenga la humedad adecuada, similar a una esponja exprimida. Demasiada humedad puede causar malos olores y la descomposición anaeróbica, mientras que muy poca puede ralentizar el proceso.</p>
    </section>
    </li>
    <li className="list-group-item m-3">

    <section>
        <h2>5. Tiempo de descomposición y recolección</h2>
        <p>El tiempo para obtener compost puede variar, pero generalmente toma de 2 a 6 meses. Sabrás que está listo cuando tenga un olor a tierra fresca y una textura similar. Usa el compost maduro para enriquecer el suelo de tu jardín.</p>
    </section>
  
    </li>


    </ul>


    </div>
  
    <div className="m-3 d-flex flex-row list-group-item m-4 ">

      <img src="https://i.pinimg.com/564x/71/67/ad/7167adba1b5ff8e391bfff0d1d8d6d46.jpg" alt="" />
    </div>
</div>
  




  
  </>;
};
