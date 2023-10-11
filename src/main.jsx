import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Login } from './page/Login.jsx'
import { Register } from './page/Register.jsx'


const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Registro',
    element: <Register />,
  },
  {
    path: '/Login',
    element: <Login />,
  }

]




const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
