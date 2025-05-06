// import featImg1 from '@assets/Audit-amico 1.png'
// import featImg2 from '@assets/Insurance-bro 1.png'
import featImg3 from '@assets/cosolidation.png'
// import featImg4 from '@assets/consultancy.png'

export default function Features() {
  return (
    <section id="feature" className="bg-white">
      <div className="mx-auto max-w-7xl text-pretty px-5 md:px-6">
        <div id="feature-heading" className="mx-auto mb-12 max-w-3xl">
          <p className=" text-[24px] underline text-center font-semibold text-amber-600">
            Other Cyber Security Services
          </p>
          {/* <h2 className="mb-4 text-center text-3xl font-bold text-gray-800">
            Protect Your Business, Secure Your Future
          </h2>
          <p className="text-center text-lg text-gray-600">
            We have already helped over 200+ businesses to achieve remarkable
            result
          </p> */}
        </div>
        <div id="features-list" className="flex flex-col gap-12 lg:gap-16">
         
          <div className="feature grid h-fit w-full grid-cols-1 items-center gap-10 overflow-hidden lg:grid-cols-2 lg:gap-24">
            <div className="image-section order-first grid aspect-video size-full grid-cols-1 place-content-center overflow-hidden lg:order-last">
              <img
                src={featImg3}
                alt=""
                draggable="false"
                className="object-top-center h-full w-full object-cover brightness-95 contrast-125"
              />
            </div>
            <div className="content-section order-last h-fit w-full lg:order-first">
              <div className="content-heading">
                <h3 className="mb-5 text-2xl font-medium leading-5 text-gray-950">
                 Consolidation of Tools
                </h3>
                <p className="leading-6 text-gray-700">
                  Empower your team with the skills and knowledge needed to
                  handle sensitive data securely. Our capacity-building services
                  offer comprehensive training programs tailored to your
                  organization's specific needs.
                </p>
              </div>
              <div className="feature-list mb-7 pl-2">
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Team Training</h4>
                    <p className="text-gray-700">
                      Equip your staff with data protection best practices.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Workshops & Seminars</h4>
                    <p className="text-gray-700">
                      Practical sessions on data security, privacy, and
                      compliance.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Continous Learning</h4>
                    <p className="text-gray-700">
                      Ensure your team stays ahead of regulatory changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="feature grid h-fit w-full grid-cols-1 items-center gap-10 overflow-hidden lg:grid-cols-2 lg:gap-24">
            <div className="image-section order-first grid aspect-video size-full grid-cols-1 place-content-center overflow-hidden">
              <img
                src={featImg4}
                alt=""
                draggable="false"
                className="object-top-center object-cover brightness-90 contrast-125"
              />
            </div>
             <div className="content-section order-last h-fit w-full">
              <div className="content-heading">
                <h3 className="mb-5 text-2xl font-medium leading-5 text-gray-950">
                 API Security
                </h3>
                <p className="leading-6 text-gray-700">
                  Our Data Consulting Services cover a wide range of expertise
                  across the globe, helping businesses navigate local and
                  international data protection requirements.
                </p>
              </div>
              <div className="feature-list mb-7 pl-2">
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Nigeria</h4>
                    <p className="text-gray-700">
                      Licensed as a Data Protection Compliance Organization
                      (DPCO), we offer consulting services that ensure NDPA
                      compliance and adherence to Nigerian data laws.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Africa and Across the Globe</h4>
                    <p className="text-gray-700">
                      Our certified professionals help organizations stay ahead
                      of privacy regulations and implement best practices for
                      secure data management.
                    </p>
                  </div>
                </div>
              </div>
            </div> 
          </div> */}
        </div>
      </div>
    </section>
  )
}
