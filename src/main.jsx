import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../src/components/Header/Header'
import Container from '../src/components/Container/Container'
import './reset.css'
import './fonts.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <Header />

    </Container>
  </React.StrictMode>,
)
