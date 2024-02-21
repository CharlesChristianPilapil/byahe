import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/service/Services";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Newsletter from "./components/Newsletter";

function App() {
  const location = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Scroll to top whenever the location changes
    if (prevLocation.current.pathname !== location.pathname) {
      handleScrollToTop();
    }

    // Update the previous location
    prevLocation.current = location;
  }, [location]);

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
        <Section title="Newsletter">
          <Newsletter />
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
