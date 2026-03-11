import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Certifications from './pages/Certifications'
import Projects from './pages/Projects'
import References from './pages/References'

export default function App() {
  return (
    <BrowserRouter>
      <div id="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/references" element={<References />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}