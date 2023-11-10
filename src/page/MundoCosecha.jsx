import React from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import '../Style/MundoCosecha.css'
import '../Style/main.css'
import '../Style/section.css'
import '../Style/SpanTitel.css'
import '../Style/SpanSubTitel.css'

export const MundoCosecha = () => {
  const [endeble, setEndeble] = React.useState(false);

  return (
    <div className="bodyPag">
      <Header />
      <main className="mainPag">
        {/* <h1>¡Crea tu propia huerta!</h1>
        <h3> En simples pasos </h3> */}
        <div className="h2-color">
          <h2>
            <span className="spanTitle">
              ¿Alguna vez soñaste con cultivar tu propia comida fresca en casa?
            </span>
          </h2>
          <h3 className="shodow">
            <span className="spanSubTitle">
              ¡Estás en el lugar correcto!
            </span>
          </h3>
        </div>
        <section className="sectionPag2">
          <p>
            En mundoCosecha, te damos la bienvenida a una comunidad de entusiastas de la jardinería y la agricultura.
            Nuestra aplicación está diseñada para acompañarte en cada paso de tu viaje de cultivo,
            ya sea que tengas un jardín espacioso o un pequeño rincón en tu balcón.
          </p>
        </section>
        <div className="m-3 divSection">
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
          <section className="sectionPag1">
            <div className='divMain'>
              <h6 className="h6-color">Calendario de Siembra:</h6>
              <p>
                Recibe recordatorios y consejos sobre cuándo sembrar, trasplantar, regar y cosechar tus plantas.
              </p>
            </div>
            <div className='divMain'>
              <h6 className="h6-color">Seguimiento de Cosechas:</h6>
              <p>
                Registra tus cosechas y obtén estadísticas sobre tu producción de alimentos a lo largo del tiempo.
              </p>
            </div>
            <div className='divMain'>
              <h6 className="h6-color">Notificaciones Personalizadas:</h6>
              <p>
                Recibe alertas sobre condiciones climáticas adversas, plagas y enfermedades, y recomendaciones para mantener tus plantas sanas.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
