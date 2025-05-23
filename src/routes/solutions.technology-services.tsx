import Hero from '@components/pages/solutions/technology-services/Hero'
import Overview from '@components/pages/solutions/technology-services/overview'
// import BreachAttackAndSimulation from '@components/pages/solutions/technology-services/breach-attack-and simulation'
// import WhyChooseBAS from '@components/pages/solutions/technology-services/why-choose-bas'
// import EncryptionTestingAndValidation from '@components/pages/solutions/technology-services/encryption-testing-and-validation'
// import WhyChooseEncryptionTandV from '@components/pages/solutions/technology-services/why-choose-encryption'
import HrsService from '@components/pages/solutions/technology-services/hrs-service'
import Newsletter from '@components/ui/NewsLetter'
import GetInTouch from '@components/pages/solutions/technology-services/Get-in-touch'
import Footer from '@components/ui/Footer'

import { createFileRoute } from '@tanstack/react-router'
import WhyHrsService from '@components/pages/solutions/technology-services/why-hrs-service'

export const Route = createFileRoute('/solutions/technology-services')({
  component: TechnologyServices,
})

function TechnologyServices() {
  return (
    <div id="project-management" className="">
      <div className="">
        <Hero />
        <Overview />
        {/* <EncryptionTestingAndValidation />
        <WhyChooseEncryptionTandV /> */}
        {/* <BreachAttackAndSimulation />
        <WhyChooseBAS /> */}
        <HrsService />
        <WhyHrsService />
        <GetInTouch />
        <Newsletter />
        <Footer />
      </div>
    </div>
  )
}
