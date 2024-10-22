import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Products from './components/Products.jsx';
import Equipments from './components/Equipments.jsx';



const router=createBrowserRouter([
  {path:'/',element:<App/>,
    children:[
      {path:'products',element:<Products/>},
      {path:'equipments',element:<Equipments/>},

    ]}

  ])
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
