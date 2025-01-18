import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeroPage from "./heroPage"
import AboutSection from "./expertise"
import WhyChooseUs from "./chooseUs"
import ServicesSection from "./services"
import Testimonials from "./testimony"
import FAQ from "./faq"
import ContactUs from "./contact"
import Footer from "./footer"
import AboutHemmaInvestment from "./aboutHema"
import Navbar from "./navbar"
import AboutContent from "./aboutSection"
import Gallery from "./gallery"



function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<>
    <HeroPage />
    <AboutSection />
    <WhyChooseUs />
    <ServicesSection />
    <Gallery />
    <Testimonials />
    <FAQ />
    <ContactUs />
    <Footer />
    </>} />
    <Route path="/about-Us" element={<>
    <Navbar />
    <AboutHemmaInvestment />
    <AboutContent />

    </>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
