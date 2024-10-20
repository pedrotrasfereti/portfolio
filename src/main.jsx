/*-===================== React =====================-*/
import React from 'react'
import ReactDOM from 'react-dom'

/*-===================== Styles =====================-*/
import './styles/main.scss'

/*-===================== App =====================-*/
import App from './App.jsx'

/*-===================== i18n =====================-*/
import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
