import { createFileRoute } from '@tanstack/react-router'
import Hero from '@pages/solutions/data-protection/hero'
import Overview from '@pages/solutions/data-protection/overview'
import Features from '@pages/solutions/data-protection/features'
// import GetStarted from '@pages/solutions/data-protection/get-started'
import WhyUs from '@pages/solutions/data-protection/why-us'
// import StartToday from '@pages/solutions/data-protection/start-today'
import Contactus from '@components/pages/solutions/data-protection/contactus'
import DataProtectionCerts from '@components/pages/solutions/utilities/dataprotectioncerts'
import NewsLetter from '@components/ui/NewsLetter'
import Footer from '@components/ui/Footer'
export const Route = createFileRoute('/solutions/data-protection')({
  component: DataProtection,
})

function DataProtection() {
  return (
    <div id="solutions" className="">
      <div className="relative z-10">
        <Hero />
        <Overview />
        <Features />
        <Contactus />
        {/* <GetStarted /> */}
        <WhyUs /> 
        <DataProtectionCerts />
        {/* <StartToday /> */}
        <NewsLetter />
        <Footer />
      </div>
    </div>
  )
}
