import companyLogo from '../../../assets/3consulting_img.jpg'

const AboutHeading: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 pt-10 md:px-8 md:pt-16">
        <div className="container-none grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="content-section w-full">
            <h5 className="mb-3 mt-2 text-sm font-semibold text-amber-600">
              About us
            </h5>
            <h1 className="mb-4 text-2xl font-semibold leading-[1.2] text-gray-900 md:text-4xl lg:text-5xl">
              Our mission is to secure your operation while maximizing their
              growth potential
            </h1>
            <p className="text-base text-gray-700">
              At 3Consulting, our mission is to provide tailored, cutting-edge
              solutions that empower our clients to thrive in today’s digital
              landscape. We focus on innovation, data protection, and ethical
              governance to ensure our clients can operate securely while
              maximizing their growth potential.
            </p>
          </div>
          <div className="img-section relative flex aspect-video w-full bg-gray-100 md:aspect-auto">
            <img
              src={companyLogo}
              alt="company logo"
              className="h-full w-full object-fill shadow-none drop-shadow-none"
            />
            {/* <span className="absolute top-1/2 w-full text-center text-gray-500">
              Founders Image
            </span> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHeading
