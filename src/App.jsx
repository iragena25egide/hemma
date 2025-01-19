import { BrowserRouter, Route, Routes} from "react-router-dom"
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
import AboutInvest from "./aboutInvest"
import Servicepage from "./servicepage"
import TeamPage from "./teampage"
import ContactUsPage from "./contactusfirst"
import TreeNurseryProducts from "./treeNursery"
import OrganicCompostProducts from "./composit"
import TechnicalSupportConsultancy from "./technical"
import ScrollToTop from "./scroll"



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
    <AboutInvest />
      <Footer />
    </>} />
    <Route path="/services" element={<>
      <Navbar />
    <Servicepage />
    <Footer />
    </>} />
    <Route path="/team" element={<>
    <Navbar />
    <TeamPage />
    <Footer />
    </>} />
    <Route path="/contact" element={<>
    <Navbar />
    <ContactUs />
    <Footer />
    </>} />
    <Route path="/nurseryTree" element={<>
    <Navbar />
    <TreeNurseryProducts />
    <Footer />
    </>}/>
    <Route path="/organic" element={<>
      <Navbar />
    <OrganicCompostProducts />
    <Footer />
      </>}/>
      <Route path="/technicalAdvice" element={<>
      <Navbar />
      <TechnicalSupportConsultancy />
      <Footer />
        </>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
