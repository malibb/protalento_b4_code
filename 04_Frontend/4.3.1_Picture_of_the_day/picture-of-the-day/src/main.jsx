import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Inicio from './views/Inicio';
import PhotoOfTheDay from './views/PhotoOfTheDay';
import PhotoByDay from './views/PhotoByDay'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/photoToday",
    element: <PhotoOfTheDay />,
  },
  {
    path: "/photo/:fechaQueSeleccionoMiUsuario",
    element: <PhotoByDay />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
