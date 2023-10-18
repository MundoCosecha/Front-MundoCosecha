import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import '../Style/MundoCosecha.css'
import '../Style/main.css'
import '../Style/section.css'

export const MundoCosecha = () => {
  return (
    <div className="bodyPag">
      <Header />
      <main className="mainPag">
        {/* <h1>¡Crea tu propia huerta!</h1>
        <h3> En simples pasos </h3> */}
        <h2>¿Alguna vez soñaste con cultivar tu propia comida fresca en casa? </h2>
        <h3>¡Estás en el lugar correcto!</h3>
        <section className="sectionPag2">
          <p>
            En mundoCosecha, te damos la bienvenida a una comunidad de entusiastas de la jardinería y la agricultura.
            Nuestra aplicación está diseñada para acompañarte en cada paso de tu viaje de cultivo,
            ya sea que tengas un jardín espacioso o un pequeño rincón en tu balcón.
          </p>
        </section>
        <section className="sectionPag1">
          <div className='divMain'>
            <h6 className="h6-color">Planificación de la Huerta:</h6>
            <p>
              Crea un diseño personalizado para tu huerta, selecciona las plantas que deseas cultivar y optimiza la disposición para un crecimiento saludable.
            </p>
          </div>
          <div className='divMain'>
            <h6 className="h6-color">Biblioteca de Plantas:</h6>
            <p>
              Accede a una amplia base de datos de plantas con información detallada sobre variedades, cuidados y requisitos específicos.
            </p>
          </div>
          <div className='divMain'>
            <h6 className="h6-color">Consejos y Tutoriales:</h6>
            <p>
              Accede a artículos y tutoriales que te ayudarán a mejorar tus habilidades de jardinería y agricultura.
            </p>
          </div>
        </section>
        <section className="sectionPag3" >
          <h3>Funciones destacadas</h3>
          <div className="Padre" >
            <div className="hijo1"></div>
            <div className="hijo2"></div>
            <div className="hijo3"></div>
            <div className="hijo4"></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
