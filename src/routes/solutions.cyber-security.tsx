import { createFileRoute } from '@tanstack/react-router'
import Hero from '@pages/solutions/cyber-security/hero'
import Overview from '@pages/solutions/cyber-security/overview'
import Features from '@pages/solutions/cyber-security/features'
// import GetStarted from '@pages/solutions/cyber-security/get-started'
// import WhyUs from '@pages/solutions/cyber-security/why-us'
import Contactus from '@components/pages/solutions/cyber-security/contactus'
import BreachAttackAndSimulation from '@components/pages/solutions/technology-services/breach-attack-and simulation'
import WhyChooseBAS from '@components/pages/solutions/technology-services/why-choose-bas'
import EncryptionTestingAndValidation from '@components/pages/solutions/technology-services/encryption-testing-and-validation'
import WhyChooseEncryptionTandV from '@components/pages/solutions/technology-services/why-choose-encryption'
import APIsecurity from '@components/pages/solutions/cyber-security/API-security'
import WhyChooseAPITandV from '@components/pages/solutions/cyber-security/why-choose-API'

import NewsLetter from '@components/ui/NewsLetter'
import Footer from '@components/ui/Footer'
export const Route = createFileRoute('/solutions/cyber-security')({
  component: DataProtection,
})

function DataProtection() {
  return (
    <div id="solutions" className="">
      <div className="relative z-10">
        <Hero />
        <Overview />
        <EncryptionTestingAndValidation />
        <WhyChooseEncryptionTandV />
        <APIsecurity />
        <WhyChooseAPITandV />
        <BreachAttackAndSimulation />
        <WhyChooseBAS />
        <Features />
        {/* <GetStarted /> */}
        {/* <WhyUs /> */}
        {/* <StartToday /> */}
        <Contactus />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  )
}
