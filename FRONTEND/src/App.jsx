import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HeaderTemplate } from './templates/Header'
import { AccueilPage } from './pages/Accueil'
import { ContactPage } from './pages/Contact'
import { ChatbotPage } from './pages/Chatbot'
import { FooterTemplate } from './templates/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderTemplate />
        <Routes>
          <Route path="/" element={<AccueilPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
        </Routes>
        <FooterTemplate />
      </BrowserRouter>
    </>
  )
}

export default App
