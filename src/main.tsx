import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SubjectElement from "./components/SubjectElement.tsx";


const router = createBrowserRouter([
    {
        path:"/",
        Component: App,
        children: [
            {
                path:"/",
                element: <div>
                    <SubjectElement subject={"Mathematiques"}/>
                </div>
            },
            {
                path:"/societe",
                element: <SubjectElement subject={"SocieteEtLangues"}/>
            }
            ,
            {
                path:"/anglais",
                element:
                    <div>
                        <SubjectElement subject={"Anglais"}/>
                    </div>

            },
            {
                path:"/epsic",
                element: <div>
                    <SubjectElement subject={"ModulesEPSIC"}/>
                </div>
            },
            {
                path:"/cie",
                element: <div>
                    <SubjectElement subject={"ModulesCIE"}/>
                </div>
            },
        ]
    },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)
