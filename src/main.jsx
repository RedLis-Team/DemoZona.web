import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App';

import './reset.scss'
import './font.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
