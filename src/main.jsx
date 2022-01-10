/*-===================== React =====================-*/
import React from 'react'
import ReactDOM from 'react-dom'

/*-===================== Styles =====================-*/
import './styles/main.scss'

/*-===================== App =====================-*/
import App from './App.jsx'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
