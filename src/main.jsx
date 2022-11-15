import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { NetflixProvider } from './context/netflixProvider'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <NetflixProvider>
            <App />
      </NetflixProvider>         
    </BrowserRouter> 
  </React.StrictMode>
)
