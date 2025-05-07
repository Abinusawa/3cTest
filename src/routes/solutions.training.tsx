import { createFileRoute } from '@tanstack/react-router'
// import Hero from '@pages/solutions/training/hero'
// import Overview from '@pages/solutions/training/overview'
import Features from '@pages/solutions/training/features'
import Contactus from '@components/pages/solutions/training/contactus'
// import GetStarted from '@pages/solutions/training/get-started'
// import StartToday from '@components/pages/solutions/data-protection/start-today'
// import WhyUs from '@pages/solutions/training/why-us'
// import AboutPECB from '@components/pages/solutions/pecb/about'
// import EnrollPECB from '@components/pages/solutions/pecb/enrrolsection'
// import EttTestimony from '@components/pages/solutions/pecb/testimony'
// import GetStarted from '@pages/solutions/data-protection/get-started'

import NewsLetter from '@components/ui/NewsLetter'
import Footer from '@components/ui/Footer'
export const Route = createFileRoute('/solutions/training')({
  component: DataProtection,
})

function DataProtection() {
  return (
    <div id="solutions" className="">
      <div className="relative z-10">
        <br />
        {/* <Hero />
        <Overview /> */}
        {/* <AboutPECB />
        <EnrollPECB /> */}
        <Features />
        <Contactus />
        {/* <GetStarted /> */}
        {/* <WhyUs /> */}
        {/* <StartToday /> */}
        <NewsLetter />
        <Footer />
      </div>
    </div>
  )
}
