import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Miaplicacion } from './Miaplicacion'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Miaplicacion></Miaplicacion>
  </StrictMode>,
)
