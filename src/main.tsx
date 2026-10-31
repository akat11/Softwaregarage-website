import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root element #root not found in index.html')
}

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

if (rootEl.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootEl, app)
} else {
  ReactDOM.createRoot(rootEl).render(app)
}
