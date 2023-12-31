import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
  </BrowserRouter>  
)
