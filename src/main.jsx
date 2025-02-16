import { StrictMode } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import AllRouter from './routes/AllRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AllRouter></AllRouter>
    </BrowserRouter>
  </StrictMode>,
)
