import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AngElement from './components/subject/Anglais.tsx';
import Societe from "./components/subject/Societe.tsx";
import Mathematiques from "./components/subject/MathElement.tsx";



const router = createBrowserRouter([
    {
        path:"/",
        Component: App,
        children: [
            {
                path:"/",
                element: <Mathematiques/>
            },
            {
                path:"/societe",
                element: <Societe/>
            }
            ,
            {
                path:"/anglais",
                element: <AngElement/>
            },
            {
                path:"/epsic",
                element: <Mathematiques/>
            },
            {
                path:"/cie",
                element: <Mathematiques/>
            },
        ]
    },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)
