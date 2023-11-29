import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Login } from "./page/Login.jsx";
import { Register } from "./page/Register.jsx";
import { Catalogo } from "./page/Catalogo.jsx";
import { Gestion } from "./page/Gestion.jsx";
import { LoginProtect } from "./routes/LoginProtect.jsx";
import { Document } from "./page/Document.jsx";
import { Foro } from "./page/Foro.jsx";
import { AuthProvider } from "./Context/AuthProvider.jsx";
import { TasksList } from "./page/TasksList.jsx";
import { Calendar } from "./page/Calendar.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/registro",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/catalogo",
    element: <Catalogo />,
  },
  {
    path: "/",
    element: <LoginProtect />,
    children: [
      {
        path: "/Gestion",
        element: <Gestion />,
      },
    ],
  },
  {
    path: "/Documentacion",
    element: <Document />,
  },
  {
    path: "/",
    element: <LoginProtect />,
    children: [
      {
        path: "/Foro",
        element: <Foro />,
      },
    ],
  },
  {
    path: "/",
    element: <LoginProtect />,
    children: [
      {
        path: "/TasksList",
        element: <TasksList />,
      },
    ],
  },
  {
    path: "/",
    element: <LoginProtect />,
    children: [
      {
        path: "/Calendar",
        element: <Calendar />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
