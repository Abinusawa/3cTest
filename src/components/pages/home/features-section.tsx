import featImg1 from '@assets/features-1.jpg'
import featImg2 from '@assets/features-2.jpg'
import featImg3 from '@assets/features-3.jpg'
import featImg4 from '@assets/features-4.jpg'
import featImg5 from '@assets/features-5.jpg'


const Features: React.FC = () => {
  return (
    <div id="feature" className="bg-white pt-12">
      <section className="mx-auto max-w-7xl text-pretty px-5 md:px-6 lg:px-20">
        <div id="feature-heading" className="mx-auto mb-12 max-w-3xl">
          <p className="mb-3 text-center font-semibold text-amber-600">
            Solution
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-800">
            Empowering Your Business in the Digital Age
          </h2>
          <p className="text-center text-lg text-gray-600">
            we provide a wide range of services designed to ensure your business
            operates securely, efficiently, and in compliance with ever-evolving
            regulations.
          </p>
        </div>
        <div id="features-list" className="flex flex-col gap-5 lg:gap-24">
          <div className="feature mb-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
            <div className="content-section">
              <div className="content-heading">
                <h3 className="mb-5 text-2xl font-medium leading-5 text-gray-950">
                  Data Protection Services
                </h3>
                <p className="leading-6 text-gray-700">
                  Our experts ensure compliance with global data privacy
                  regulations, protecting your data and strengthening your
                  operations.
                </p>
              </div>
              <div className="feature-list mb-7 pl-2">
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Data Protection Audit</h4>
                    <p className="text-gray-700">
                      Comprehensive audits to assess rist and ensure regulatory
                      alignment
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Policy Development & Review</h4>
                    <p className="text-gray-700">
                      Custom policies to meet compliance standards and support
                      business growth.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Capacity Building</h4>
                    <p className="text-gray-700">
                      Training programs to equip your team with the skills
                      needed for responsible data management.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <a 
              className="cursor-pointer font-medium text-amber-600 hover:text-amber-700">
                Learn more <i className="bi bi-arrow-right"></i>{' '}
              </a>
            </div>
            <div className="image-section aspect-video lg:mt-0 lg:aspect-square lg:size-full">
              <img
                src={featImg1}
                alt=""
                draggable="false"
                className="object-top-center h-full w-full object-cover brightness-90 contrast-125 rounded-2xl"
              />
            </div>
          </div>
           {/* AI ETHICS & GOVERNANCE --- START */}
           <div className="feature mb-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
             {/* image Section */}
             <div className="image-section aspect-video lg:mt-0 lg:aspect-square lg:size-full">
              <img
                src={featImg4}
                alt=""
                draggable="false"
                className="object-top-center h-full w-full object-cover brightness-90 contrast-125 rounded-2xl"
              />
            </div>
            <div className="content-section">
              <div className="content-heading">
                <h3 className="mb-5 text-2xl font-medium leading-5 text-gray-950">
                  AI (Artificial Intelligence) Governance & Solutioning
                </h3>
                <p className="leading-6 text-gray-700">
                  Driving Responsible & Compliant AI Adoption.
                </p>
              </div>
              <div className="feature-list mb-7 pl-2">
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">
                     AI Audit
                    </h4>
                    {/* <p className="text-gray-700">
                      <ul>
                        <li>Physical Workload Security</li>
                        <li>Cloud Workload Security</li>
                      </ul>
                    </p> */}
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">
                      AI Framework
                    </h4>
                    {/* <p className="text-gray-700">
                      Simulate real-world attacks to assess and enhance your
                      security measures.
                    </p> */}
                  </div>
                </div>
              </div>
              <a className="cursor-pointer font-medium text-amber-600 hover:text-amber-700">
                Learn more <i className="bi bi-arrow-right"></i>{' '}
              </a>
            </div>
           
          </div>
          {/* AI ETHICS & GOVERNANCE --- END */}

          {/* --- */}

          {/* PROJECT MANAGEMENT --- START */}
          <div className="feature mb-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
           <div className="content-section">
              <div className="content-heading">
                <h3 className="mb-5 text-2xl font-medium leading-5 text-gray-950">
                  Project Management & Outsourcing DPO
                </h3>
                <p className="leading-6 text-gray-700">
                  Optimize your operations with our outsourced DPO, project
                  management, and AI ethics services. Our certified
                  professionals will help you manage compliance and drive
                  business outcomes
                </p>
              </div>
              <div className="feature-list mb-7 pl-2">
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Agile Methodology</h4>
                    <p className="text-gray-700">
                      We use Agile for seamless, adaptive project execution.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">
                      Outsourced Data Protection Officer (DPO) Services
                    </h4>
                    <p className="text-gray-700">
                      Certified DPOs provide expert guidance, reducing
                      compliance costs.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">AI Ethics & Governance</h4>
                    <p className="text-gray-700">
                      Navigate AI challenges with our ethical AI consultancy and
                      assessments.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <a className="cursor-pointer font-medium text-amber-600 hover:text-amber-700">
                Learn more <i className="bi bi-arrow-right"></i>{' '}
              </a>
            </div>
            <div className="image-section order-2 aspect-video lg:order-none lg:mt-0 lg:aspect-square lg:size-full">
              <img
                src={featImg2}
                alt=""
                draggable="false"
                className="object-top-center h-full w-full object-cover brightness-90 contrast-125 rounded-2xl"
              />
            </div>
          </div>
          {/* PROJECT MANAGEMENT --- END */}

          {/* --- */}

          {/* TECH SERVICES --- START */}
          <div className="feature mb-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
            <div className="image-section aspect-video lg:mt-0 lg:aspect-square lg:size-full">
                <img
                  src={featImg5}
                  alt=""
                  draggable="false"
                  className="object-top-center h-full w-full object-cover brightness-90 contrast-125 rounded-2xl"
                />
              </div>
              <div className="content-section">
                <div className="content-heading">
                  <h3 className="mb-5 text-2xl font-medium leading-5 text-gray-950">
                    Technology Services
                  </h3>
                  <p className="leading-6 text-gray-700">
                    Harness the power of cutting-edge technology to streamline
                    your HR processes and secure your infrastructure.
                  </p>
                </div>
                <div className="feature-list mb-7 pl-2">
                  <div className="mt-7 flex gap-3">
                    <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                    <div className="content">
                      <h4 className="font-medium">
                        HRIS (Human Resources Information System)
                      </h4>
                      <p className="text-gray-700">
                        End-to-end HR management with seamless data integration
                        and compliance.
                      </p>
                    </div>
                  </div>
                  <div className="mt-7 flex gap-3">
                    <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                    <div className="content">
                      <h4 className="font-medium">
                        Breach Attack Simulation (BAS) Services
                      </h4>
                      <p className="text-gray-700">
                        Simulate real-world attacks to assess and enhance your
                        security measures.
                      </p>
                    </div>
                  </div>
                </div>
                <a className="cursor-pointer font-medium text-amber-600 hover:text-amber-700">
                  Learn more <i className="bi bi-arrow-right"></i>{' '}
                </a>
              </div>
           </div>
           {/* TECH SERVICES --- END */}


           {/* --- */}
           
           {/* CYBER SECURITY --- START */}
          <div className="feature mb-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-24">
            
            <div className="content-section">
              <div className="content-heading">
                <h3 className="mb-5 text-2xl font-medium leading-5 text-gray-950">
                  Cyber-Security Services
                </h3>
                <p className="leading-6 text-gray-700">
                  {/* Lorem ipsum, dolor sit amet consectetur adipsisicing elit. Reprehenderit, et, magnam repudiandae id nihil quaerat deserunt adipisci optio, incidunt quam iste. */}
                </p>
              </div>
              <div className="feature-list mb-7 pl-2">
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">
                     Workload Security
                    </h4>
                    <p className="text-gray-700">
                      <ul>
                        <li>Physical Workload Security</li>
                        <li>Cloud Workload Security</li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">
                      Cyber Insurance
                    </h4>
                    <p className="text-gray-700">
                      Simulate real-world attacks to assess and enhance your
                      security measures.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">
                      Encryption
                    </h4>
                    <p className="text-gray-700">
                      Simulate real-world attacks to assess and enhance your
                      security measures.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">
                      Consolidation Tools
                    </h4>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">
                      API Security
                    </h4>
                  </div>
                </div>
              </div>
              <a className="cursor-pointer font-medium text-amber-600 hover:text-amber-700">
                Learn more <i className="bi bi-arrow-right"></i>{' '}
              </a>
            </div>

            <div className="image-section aspect-video lg:mt-0 lg:aspect-square lg:size-full">
              <img
                src={featImg3}
                alt=""
                draggable="false"
                className="object-top-center h-full w-full object-cover brightness-90 contrast-125 rounded-2xl"
              />
            </div>
          </div>
          {/* CYBER SECURITY --- END */}



         
            
        </div>
      </section>
    </div>
  )
}

export default Features
