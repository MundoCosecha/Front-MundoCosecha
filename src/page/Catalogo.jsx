import { Navbar } from "../components/Navbar"
import { Cards } from "../components/catalogo/Cards"



export const Catalogo = () => {

  return (
    <>
      <div className="d-flex flex-column">
        
          <Navbar/>
      
          <Cards/>

      </div>
    </>
  )
}
