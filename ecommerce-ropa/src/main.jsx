import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './componentes/Navbar/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


const Button = ({text}) => {
  return (
    <button>
      {text}
    </button>

  )
}


root.render (
  <React.Fragment>
    <Button text="button 1" color : black/>
    <Button text="button 2"/>
    <Button text="button 3"/>


  </React.Fragment>
)

