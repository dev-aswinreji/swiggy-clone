import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'






const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
    },
    {
      path:'/about',
      element:<About/>
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
