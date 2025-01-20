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
      <link rel="icon" href="../assets/images/logo.png" />
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
      <link rel="icon" href="../assets/images/logo.png" />
        <title>ABOUT US || HEMMA INVESTMENT COMPANY Ltd</title>
      </Helmet>
    <Navbar />
    <AboutHemmaInvestment />
    <AboutContent />
    <AboutInvest />
    <WhyChooseUs />
      <Footer />
    </>} />
    <Route path="/services" element={<>

      <Helmet>
      <link rel="icon" href="../assets/images/logo.png" />
        <title>SERVICES || HEMMA INVESTMENT COMPANY Ltd</title>
      </Helmet>
      <Navbar />
    <Servicepage />
    <Footer />
    </>} />
    <Route path="/team" element={<>
      <Helmet>
      <link rel="icon" href="../assets/images/logo.png" />
        <title>TEAM || HEMMA INVESTMENT COMPANY Ltd</title>
      </Helmet>
    <Navbar />
    <TeamPage />
    <Footer />
    </>} />
    <Route path="/contact" element={<>

      <Helmet>
      <link rel="icon" href="../assets/images/logo.png" />
        <title>CONTACT || HEMMA INVESTMENT COMPANY Ltd</title>
      </Helmet>
    <Navbar />
    <ContactUs />
    <Footer />
    </>} />
    <Route path="/nurseryTree" element={<>

      <Helmet>
      <link rel="icon" href="../assets/images/logo.png" />
        <title>NURSERY TREE || HEMMA</title>
      </Helmet>
    <Navbar />
    <TreeNurseryProducts />
    <Footer />
    </>}/>
    <Route path="/organic" element={<>

      <Helmet>
      <link rel="icon" href="../assets/images/logo.png" />
        <title>ORGANIC COMPOSIT || HEMMA</title>
      </Helmet>
      <Navbar />
    <OrganicCompostProducts />
    <Footer />
      </>}/>
      <Route path="/technicalAdvice" element={<>

        <Helmet>
        <link rel="icon" href="../assets/images/logo.png" />
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
