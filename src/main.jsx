import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './routes/AppRoute.jsx'
import RefreshTop from './routes/RefreshTop.jsx'
import PageTitle from './routes/PageTitle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RefreshTop />
      <PageTitle />
      <AppRoute />
    </BrowserRouter>  
  </StrictMode>,
)
