import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './index.scss'
import Container from '../src/components/Container/Container'
import Header from '../src/components/Header/Header'
import Hero from '../src/components/Hero/Hero'
import Areas from './components/Areas/Areas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <Header />
      <main>
        <Hero />
        <Areas />
      </main>
    </Container>
  </React.StrictMode>,
)
