import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Products from './components/Products.jsx';
import Equipments from './components/Equipments.jsx';
import Blog from './components/Blog.jsx';
import Cart from './components/Cart.jsx';
import { CartProvider } from './store/CartContext';
import ReviewPage from './components/ReviewPage.jsx';



const router=createBrowserRouter([
  {path:'/',element:<App/>,
    children:[
      {path:'products',element:<Products/>},
      {path:'equipments',element:<Equipments/>},
      {path:'blog',element:<Blog/>},
      {path:'cart',element:<Cart/>},
      {path:'review',element:<ReviewPage/>}

    ]}

  ])
createRoot(document.getElementById('root')).render(

    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
)
