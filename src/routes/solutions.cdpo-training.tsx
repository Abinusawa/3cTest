import { createFileRoute } from '@tanstack/react-router'
import AboutCDPO from '@pages/solutions/cdpo/about'
import EnrollSection from '@pages/solutions/cdpo/enrrolsection'
import Testimony from '@pages/solutions/cdpo/testimony'
import StartToday from '@pages/solutions/data-protection/start-today'
import Footer from '@components/ui/Footer'

export const Route = createFileRoute('/solutions/cdpo-training')({
  component: CDPOTraining,
})

function CDPOTraining() {
  return (
    <>
      <AboutCDPO />
      <EnrollSection />
      <Testimony />
      <StartToday />
      <Footer />
    </>
  )
}
