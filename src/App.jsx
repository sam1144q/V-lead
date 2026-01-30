import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import ServicePage from './pages/ServicePgae'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <>
      {/* Header stays common for all pages */}
      <Header />

      {/* Page Routes */}
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer stays common for all pages */}
      <Footer />
    </>
  )
}

export default App
