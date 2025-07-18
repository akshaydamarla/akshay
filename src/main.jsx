import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Myapp from './myapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Myapp />
  </StrictMode>,
)
