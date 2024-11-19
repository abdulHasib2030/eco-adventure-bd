import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom'
import Route from './routes/Route.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={Route}>
<ToastContainer></ToastContainer>
    </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
