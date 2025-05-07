import { createFileRoute } from '@tanstack/react-router'
import Hero from '@pages/solutions/AI-consulting/hero'
import Overview from '@pages/solutions/AI-consulting/overview'
// import GetStarted from '@pages/solutions/AI-consulting/get-started'
import Features from '@pages/solutions/AI-consulting/features'
// import WhyUs from '@pages/solutions/AI-consulting/why-us'
import Contactus from '@components/pages/solutions/AI-consulting/contactus'
import AI_GovCerts from '@components/pages/solutions/utilities/ai_GovCerts'
import NewsLetter from '@components/ui/NewsLetter'
import Footer from '@components/ui/Footer'
export const Route = createFileRoute('/solutions/AI-consulting')({
  component: DataProtection,
})

function DataProtection() {
  return (
    <div id="solutions" className="">
      <div className="relative z-10">
        <Hero />
        <Overview />
        <br />
        <Features />
        {/* <GetStarted /> */}
        <br></br>
        {/* <WhyUs /> */}
        <AI_GovCerts />
        {/* <StartToday /> */}
        <Contactus />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  )
}
