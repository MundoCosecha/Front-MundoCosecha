import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../Style/MundoCosecha.css";
import "../Style/main.css";
import "../Style/section.css";
import "../Style/SpanTitel.css";
import "../Style/SpanSubTitel.css";
import "../Style/dcgDiv.css";

export const MundoCosecha = () => {
  const { state } = useContext(AuthContext);

  return (
    <div className="bodyPag">
      <Header />
      <main className="mainPag">
        <div className="h2-color">
          <h2>
            <span className="spanTitle">
              ¿Alguna vez soñaste con cultivar verduras frescas en casa?
            </span>
          </h2>
          <h3 className="shodow">
            <span className="spanSubTitle">¡Estás en el lugar correcto!</span>
          </h3>
        </div>
        <section className="sectionPag2">
          <p>
            En mundoCosecha, te damos la bienvenida a una comunidad de
            entusiastas de la jardinería y la agricultura. Nuestra aplicación
            está diseñada para acompañarte en cada paso de tu viaje de cultivo,
            ya sea que tengas un jardín espacioso o un pequeño rincón en tu
            balcón.
          </p>
        </section>
        {/* <div className="m-3 divSection">
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
        </div> */}

        <div className="padre">
          <div className="documentacion">
            <h4 className="titulo">Documentacion</h4>
            <img
              src="https://i.pinimg.com/564x/ab/46/8a/ab468a174c2825ba320f88a589371de9.jpg"
              alt=""
              className="img"
            />
            <p className="descripcion">
              Documentación Huertas: Guías y recursos para crear y gestionar
              huertas urbanas, accesibles desde dispositivos móviles y comunidad
              colaborativa.
            </p>
            <Link to="/documentacion">
              <button className="btn-1">ir</button>
            </Link>
          </div>

          <div className="catalogo">
            <h4 className="titulo">Catalogo</h4>
            <img
              src="https://i.pinimg.com/564x/ef/19/8c/ef198c4f1339b0b1261ea9c9097edb7f.jpg"
              alt=""
              className="img "
            />
            <p className="descripcion">
              Catálogo online de plantas: info detallada, búsqueda y comunidad
              para entusiastas de la jardinería.
            </p>
            <Link to="/catalogo">
              <button className="btn-1">ir</button>
            </Link>
          </div>

          <div className="gestion">
            <h4 className="titulo">Gestion</h4>
            {state.logged ? (
              <>
                <img
                  src="https://i.pinimg.com/564x/d8/3e/69/d83e6940881c2b4d83a9f8340f2faa3d.jpg"
                  alt=""
                  className="img "
                />
                <p className="descripcion">
                  Optimiza tu huerta con nuestra herramienta online: planifica,
                  registra y comparte. Jardinería urbana simplificada y
                  accesible desde cualquier lugar.
                </p>
                <Link to={"/gestion"}>
                  <button className="btn-1">ir</button>
                </Link>
              </>
            ) : (
              <>
                <p className="descripcion">
                  Necesitas registrarte para acceder a esta herramientas
                </p>

                <Link to={"/registro"}>
                  <button className="btn-1">Registrarse</button>
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="body-carrusel">
          <h1>Tipos de huertas</h1>
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="https://verdeceres.com/wp-content/uploads/huerta-.jpg"
                  className=" img-carrusel "
                  alt=""
                />
                <div className="carousel-caption d-none d-md-block h2-carrusel">
                  <h2 className="text-white">Huerta ecologica</h2>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://elhuertoenlaciudad.files.wordpress.com/2015/04/huerta-vertical-en-tubos.png"
                  className="img-carrusel "
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block h2-carrusel">
                  <h2 className="text-white">Huerta vertical</h2>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://cdn.bioguia.com/embed/4f541a3097944fb3d7e81b4c4eea42fc1524340724/Guia_para_la_construccion_de_bancales_elevados_de_jardineria?imagick=1&size=500"
                  className="img-carrusel "
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block  h2-carrusel">
                  <h2 className="text-white ">Huertas en bancales</h2>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
