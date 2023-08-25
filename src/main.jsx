import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './fonts.scss'
import Container from '../src/components/Container/Container'
import Header from '../src/components/Header/Header'
import Hero from '../src/components/Hero/Hero'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <Header />
      <main>
        <Hero />

      </main>
    </Container>
  </React.StrictMode>,
)
