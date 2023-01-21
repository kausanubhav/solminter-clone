import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import WalletContextProvider from './context/WalletContextProvider'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <WalletContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WalletContextProvider>
)
