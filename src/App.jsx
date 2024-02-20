import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Services from "./pages/service/Services"
import Contact from "./pages/contact/Contact"
import Gallery from "./pages/gallery/Gallery"
import Footer from "./components/Footer"
import Section from "./components/Section"
import Newsletter from "./components/Newsletter"

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Section title='Newsletter'>
          <Newsletter />
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default App
