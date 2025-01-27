import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root.jsx'
import Home from './components/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Dashboard from './components/Dashboard.jsx'
import Cart from './components/Cart.jsx'
import ContactUs from './components/ContactUs.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/products/:productId',
        loader: () => fetch('./products.json') ,
        element: <ProductDetails></ProductDetails>
      }
      ,
      {
        path: '/',
        loader: () => fetch('./products.json') ,
        element: <Cart></Cart>
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
