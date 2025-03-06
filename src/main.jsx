import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import MainRoutes from '../routes/MainRoutes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={MainRoutes}></RouterProvider>
  </StrictMode>,
)
