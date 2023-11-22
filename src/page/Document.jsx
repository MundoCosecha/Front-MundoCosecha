// import { useState } from 'react'

import { Navbar } from "../components/Navbar";

// export const Document = () => {

//     const [ error, setError ] = useState(false)

//     const [ user, setUser ] = useState(
//         {
//             userName:""
//         }
//     )




//     const  handlerSubmit = (e) => {
//         e.preventDefault()
        
//         if( user.userName === "" ) {
//             setError(true)
//             return
//         } else{
//             setError(false)
//         }
        
//     }

//     const handleChange = (e) => {

//         setUser({
//             ...user,
//             [e.target.name]: e.target.value 
//         })

//     }


//     return (
//         <div>
//             <h1> hola mundo</h1>
//             <form action=""
//             onSubmit={ handlerSubmit}
//             onChange={ handleChange }
//             >
//                 <label > MENSAJERIA </label>
//              <input type="text" name='userName' />
//              <button type = 'submit'>
//                 ENVIAR
//              </button>
//             </form>
//             {error && <p> Todos los campos son necesarios </p>}
//         </div>
//     );
// }





export const Document = () => {
    return (
        <div>
            <Navbar/>
            <h2>HOLA MUNNDO</h2>
            <p> debo realizar la estructura para la DOCUMENTACION
            </p>
        </div>
    );
}


