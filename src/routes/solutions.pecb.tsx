import AboutPECB from '@components/pages/solutions/pecb/about'
import EnrollPECB from '@components/pages/solutions/pecb/enrrolsection'
// import EttTestimony from '@components/pages/solutions/pecb/testimony'
import GetStarted from '@pages/solutions/data-protection/get-started'
import { createFileRoute } from '@tanstack/react-router'
import Footer from '@components/ui/Footer'
// import AboutPECB from '@components/pages/solutions/pecb/about'

export const Route = createFileRoute('/solutions/pecb')({
  component: EducationalTechnologyTraining,
})

function EducationalTechnologyTraining() {
  return (
    <>
      <AboutPECB />
      <EnrollPECB />
      {/* <EttTestimony /> */}
      <GetStarted />
      <Footer />
    </>
  )
}
