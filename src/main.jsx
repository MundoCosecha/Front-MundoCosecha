import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Login } from './page/Login.jsx'
import { Register } from './page/Register.jsx'
import { Catalogo } from './page/Catalogo.jsx'
import { Gestion } from './page/gestion.jsx'


const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/registro',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/catalogo',
    element: <Catalogo />,
  },
  {
    path: '/Gestion',
    element: <Gestion />,
  },
]




const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
