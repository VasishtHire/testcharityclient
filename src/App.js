import React from "react"
import Header from "./component/Head/Header"
import About from "./component/About/About"
import Home from "./component/Hero/Home"
import Work from "./component/Work/Work"
import Timeline from "./component/Timeline/Timeline"
import Team from "./component/Team/Team"
import Testimonial from "./component/Testimonial/Testimonial"
import Fundraisers from "./component/Fundraisers/Fundraisers"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import AnimatedPage from "./helpers/AnimatedPage"
import "./App.css"
// import Togglepage from "./helpers/Togglepage"



const App = () => {
  
  return (
    <>
    <AnimatedPage>
      <Header />
      <Home />
      <About />
      <Work />
      <Timeline />
      <Team />
      <Testimonial />
      <Fundraisers />
      <Contact />
      <Footer />
      </AnimatedPage>
    </>
  )
}

export default App
