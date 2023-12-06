import { Navbar } from "../components/Navbar";
import "../Style/document.css";

export const Document = () => {
  return (
 
    <div>
    <Navbar />
      
          <div className="titulo">
        <div className="titulo-h3">
          <h3>Estas en la sección Principal de la Documentación</h3>
        </div>

        <p className="parrafos">
             La documentación de cómo plantar de Mundo Cosecha es una herramienta
          muy valiosa para los jardineros principiantes y experimentados. La
          documentación incluye información sobre cómo elegir el lugar adecuado
          para la huerta, cómo preparar el suelo, cómo sembrar las semillas y
          cómo cuidar las plantas.
        </p>
      </div>

       <div className="beneficios-titulo">
         <h3>Beneficios de la documentación</h3>
      </div>

       <div className="beneficios">
         <div className="beneficio-1">
           <img
            src="https://i.pinimg.com/564x/58/ab/bd/58abbd84b8ca29512c0c90448f984b83.jpg"
            alt=""
            className="img-beneficio"
          />
          <p className="parrafos">
            Puede ayudar a los jardineros principiantes a aprender los conceptos
            básicos del cultivo de huertas. La documentación proporciona
            información clara y concisa sobre los pasos necesarios para comenzar
            una huerta.
          </p>
        </div>

         <div className="beneficio-2">
           <img
             src="https://i.pinimg.com/564x/6b/fa/d0/6bfad09b71a30f00801ac45f69b48876.jpg"
             alt=""
             className="img-beneficio"
           />
           <p className="parrafos">
             Puede ayudar a los jardineros experimentados a aprender nuevas
             técnicas y métodos de cultivo. La documentación incluye información
             sobre el control de plagas y enfermedades y la producción de
             alimentos orgánicos.
           </p>
         </div>
         <div className="beneficio-3">
           <img
             src="https://i.pinimg.com/564x/1e/63/82/1e63822ca0e14b935571ff1515a3b69f.jpg"
             alt=""
             className="img-beneficio"
           />
           <p className="parrafos">
             Puede ayudar a los jardineros a ahorrar tiempo y dinero. La
             documentación puede evitar que los jardineros cometan errores
             comunes, lo que puede ahorrarles tiempo y dinero en el largo plazo.
          </p>
       </div>
      </div>

      
    
    </div>




  );
};
