import pecbImg from '@assets/pecb.jpg'

const AboutPECB: React.FC = () => {
  return (
    <section id="About-PECB" className="pb-12 lg:pb-16">
      <div className="mx-auto flex h-fit w-full max-w-7xl px-5 pt-24 md:px-6 lg:pt-16">
        <div className="container-none grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-2">
          <div className="text-contents h-fit">
            <h5 className="mb-2 w-fit text-sm font-semibold text-orange-500">
              About PECB Courses
            </h5>
            <h2 className="mb-2 text-2xl font-medium text-gray-900 md:mb-4 md:text-3xl">
              PECB ( Professional Evaluation and Certification Board )
            </h2>
            <h3 className="mb-4 text-lg text-gray-900 md:mb-6 md:text-xl">
              {/* Empowering Educators Through Technology */}
            </h3>
            <p className="font-normal text-justify text-gray-700">
            PECB (Professional Evaluation and Certification Board) is a globally recognized certification body offering training and certification in cybersecurity, data privacy, AI governance, and compliance. 
            <br /> <br />
            PECB certifications help professionals enhance expertise and ensure organizational regulatory compliance.
            <br /><br />
            <p className='text-orange-500'>Why Choose PECB: </p>
            <div className='flex gap-4'>
            <ul className="list-disc ml-4">
                <li>Global Recognition</li>
                <li>Comprehensive Training</li>
                <li>Career Growth</li>
              </ul>
              <ul className="list-disc ml-4">
                <li>Global Recognition</li>
                <li>Comprehensive Training</li>
                <li>Career Growth</li>
              </ul>
            </div>
            </p>
          </div>
          <div className="image-contents lg:py-auto flex h-full">
            <div className="img-frame relative mx-auto my-auto flex h-fit w-fit lg:w-3/5">
              <img src={pecbImg} alt="" className="block h-4/5 shrink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPECB
