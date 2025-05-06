import { createFileRoute } from '@tanstack/react-router'
import AboutHeading from '@pages/about/heading'
import PartnersSection from '@pages/about/partners'
import Certificates from '@pages/about/certificates'
import MetricSection from '@pages/about/metric'
import OurStorySection from '@pages/about/ourstory'
import OurValueSection from '@pages/about/ourvalues'
import OurTeamSection from '@pages/about/ourteam'
import Newsletter from '@components/ui/NewsLetter'
import Footer from '@components/ui/Footer'

export const Route = createFileRoute('/about-us')({
  component: AboutUs,
})

function AboutUs() {
  return (
    <>
      {/* <div className="p-4 pt-24 md:pt-32">Learn more about our company.</div> */}
      <AboutHeading />
      <section className="w-full pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 flex flex-col md:flex-row">
        <Certificates />
        <PartnersSection />
        {/* <PartnersSection /> */}
      </div>
      </section>
      <MetricSection />
      <OurStorySection />
      <OurValueSection />
      <OurTeamSection />
      <Newsletter />
      <Footer />
    </>
  )
}
