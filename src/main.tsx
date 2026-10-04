import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'

const savedTheme = localStorage.getItem('portfolio-theme')

if (savedTheme === 'light' || savedTheme === 'dark') {
  document.documentElement.setAttribute(
    'data-theme',
    savedTheme,
  )
} else {
  document.documentElement.setAttribute(
    'data-theme',
    'dark',
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)