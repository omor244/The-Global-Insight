import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Router/Router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Provider from './Contex/Provider';





const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Provider>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
      
  </Provider>
  </QueryClientProvider>
)
