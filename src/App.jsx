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
import { Helmet } from "react-helmet"




function App() {
  

  return (
   <BrowserRouter>
   <Routes>

   
    <Route path="/" element={<>
      <Helmet>
        <title>HEMMA INVESTMENT COMPANY Ltd</title>
      </Helmet>

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

      <Helmet>
        <title>ABOUT US || HEMMA INVESTMENT COMPANY Ltd</title>
      </Helmet>
    <Navbar />
    <AboutHemmaInvestment />
    <AboutContent />
    <AboutInvest />
      <Footer />
    </>} />
    <Route path="/services" element={<>

      <Helmet>
        <title>SERVICES || HEMMA INVESTMENT COMPANY Ltd</title>
      </Helmet>
      <Navbar />
    <Servicepage />
    <Footer />
    </>} />
    <Route path="/team" element={<>
      <Helmet>
        <title>TEAM || HEMMA INVESTMENT COMPANY Ltd</title>
      </Helmet>
    <Navbar />
    <TeamPage />
    <Footer />
    </>} />
    <Route path="/contact" element={<>

      <Helmet>
        <title>CONTACT || HEMMA INVESTMENT COMPANY Ltd</title>
      </Helmet>
    <Navbar />
    <ContactUs />
    <Footer />
    </>} />
    <Route path="/nurseryTree" element={<>

      <Helmet>
        <title>NURSERY TREE || HEMMA</title>
      </Helmet>
    <Navbar />
    <TreeNurseryProducts />
    <Footer />
    </>}/>
    <Route path="/organic" element={<>

      <Helmet>
        <title>ORGANIC COMPOSIT || HEMMA</title>
      </Helmet>
      <Navbar />
    <OrganicCompostProducts />
    <Footer />
      </>}/>
      <Route path="/technicalAdvice" element={<>

        <Helmet>
        <title>TECHNICAL SUPPORT || HEMMA</title>
      </Helmet>
      <Navbar />
      <TechnicalSupportConsultancy />
      <Footer />
        </>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
