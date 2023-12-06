import { Navbar } from "../components/Navbar";
import "../Style/document.css";

export const Document = () => {
  return (
 
    <div>
    <Navbar />

        <div className="titulo-h3">
          <h3 className="text-center text-dark m-3 text-decoration-underline">Estas en la sección Principal de la Documentación</h3>
        </div>

          <div className="">

            <ul className="list-group list-group-flush">

              <li className="list-group-item shadow p-3 mb-3 bg-body rounded">

        <p className=" text-center text-dark m-3">
             La documentación de cómo plantar de Mundo Cosecha es una herramienta
          muy valiosa para los jardineros principiantes y experimentados. La
          documentación incluye información sobre cómo elegir el lugar adecuado
          para la huerta, cómo preparar el suelo, cómo sembrar las semillas y
          cómo cuidar las plantas.
        </p>

              </li>
            </ul>

      </div>

       <div className="">
         <h3 className="text-center text-dark m-3 text-decoration-underline">Beneficios de la documentación</h3>
      </div>
    <div class="card-group">
  <div class="card m-3 shadow p-3 mb-5 bg-body rounded">
    <img src="https://i.pinimg.com/236x/02/65/c3/0265c39a2dc11c05b7f78e526ced3aac.jpg" class="card-img-top" alt="..." width={400} height={600}/>
    <div class="card-body">
      <h5 class="card-title">1°</h5>
      <p class="card-text">Puede ayudar a los jardineros principiantes a aprender los conceptos
            básicos del cultivo de huertas. La documentación proporciona
            información clara y concisa sobre los pasos necesarios para comenzar
            una huerta.</p>
   
    </div>
  </div>
  <div class="card m-3 shadow p-3 mb-5 bg-body rounded">
    <img src="https://i.pinimg.com/236x/f8/a8/bd/f8a8bd87663ea04622e532528baa8186.jpg" class="card-img-top" alt="..." width={400} height={600}/>
    <div class="card-body">
      <h5 class="card-title">2°</h5>
      <p class="card-text">   Puede ayudar a los jardineros experimentados a aprender nuevas
             técnicas y métodos de cultivo. La documentación incluye información
             sobre el control de plagas y enfermedades y la producción de
             alimentos orgánicos.</p>
    
    </div>
  </div>
  <div className="card m-3 shadow p-3 mb-5 bg-body rounded ">
    <img src="https://i.pinimg.com/236x/69/af/77/69af7735f24d5c0ef3941c6c213bd264.jpg" class="card-img-top" alt="..." width={400} height={600}/>
    <div class="card-body">
      <h5 class="card-title">3°</h5>
      <p class="card-text"> Puede ayudar a los jardineros a ahorrar tiempo y dinero. La
             documentación puede evitar que los jardineros cometan errores
             comunes, lo que puede ahorrarles tiempo y dinero en el largo plazo.</p>

    </div>
  </div>
</div>






      

       


      
    
    </div>




  );
};
