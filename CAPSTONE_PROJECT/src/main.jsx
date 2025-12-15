import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  //remove strict mode so that the api isnt resctrivted to only load twice
    <App />

)
