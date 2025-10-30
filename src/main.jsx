import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { RouterProvider,createBrowserRouter} from 'react-router-dom'
import Project from './components/Project.jsx'
import Contact from "./components/Contact.jsx"
import GitHub from './components/GitHub.jsx'
import Skills from "./components/Skills.jsx"
import About from "./components/About.jsx"

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
       path:'/',
       element:<About/>
      },
     {
      path:"project",
      element:<Project />
     },
     {
      path:"contact",
      element:<Contact />
     },
     {
      path:"github",
      element:<GitHub />
     },
     {
      path:"skills",
      element:<Skills />
     }

    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
