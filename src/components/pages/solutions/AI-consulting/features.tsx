import featImg1 from '@assets/Audit-amico 1.png'
import featImg2 from '@assets/Insurance-bro 1.png'
// import featImg3 from '@assets/skills.png'
// import featImg4 from '@assets/consultancy.png'

export default function Features() {
  return (
    <section id="feature" className="bg-white">
      <div className="mx-auto max-w-7xl text-pretty px-5 md:px-6">
        <div id="feature-heading" className="mx-auto m-12 max-w-3xl">
          <p className=" text-[24px] underline text-center font-semibold text-amber-600">
          Our AI Consulting services include:
          </p>
          {/* <h2 className="mb-4 text-center text-3xl font-bold text-gray-800">
            Protect Your Business, Secure Your Future
          </h2> */}
          <br />
          <p className="text-center text-lg text-gray-600">
          Our AI Audit service evaluates AI systems and third-party AI vendors for transparency, fairness, security, and compliance with global regulatory standards.
          </p>
        </div>
        <div id="features-list" className="flex flex-col gap-12 lg:gap-16">
          <div className="feature grid h-fit w-full grid-cols-1 items-center gap-10 overflow-hidden lg:grid-cols-2 lg:gap-24">
            <div className="image-section order-first grid h-full w-full grid-cols-1 place-content-center overflow-hidden lg:order-last">
              <img
                src={featImg1}
                alt=""
                draggable="false"
                className="mx-auto h-full w-full object-cover"
              />
            </div>
            <div className="content-section order-last h-fit w-full lg:order-first">
              <div className="content-heading">
                <h3 className="mb-5 text-2xl font-medium leading-5 text-gray-950">
                AI Audit
                </h3>
                <p className="leading-6 text-gray-700">
                  Ensuring Responsible and Compliant AI Deployment.
                </p>
                <p className="leading-6 text-gray-700">
                  Our AI Audit service evaluates AI systems and third-party AI vendors for transparency, fairness, security, and compliance with global regulatory standards.
                </p>
              </div>
              <div className="feature-list mb-7 pl-2">
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Regulatory Compliance: </h4>
                    <p className="text-gray-700">
                    Alignment with GDPR, EU AI Act, and other jurisdictional AI regulations.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Bias & Fairness Assessment: </h4>
                    <p className="text-gray-700">
                      Evaluating AI models for discrimination and ethical risks.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Data Privacy & Security: </h4>
                    <p className="text-gray-700">
                      Ensuring AI-driven data processing meets privacy laws.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Explainability & Transparency: </h4>
                    <p className="text-gray-700">
                    Assessing AI decision-making for accountability.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Risk Assessment & Mitigation: </h4>
                    <p className="text-gray-700">
                    Identifying vulnerabilities and implementing safeguards.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Vendor AI Assessment: </h4>
                    <p className="text-gray-700">
                    Evaluating third-party AI tools to ensure compliance, security, and ethical AI practices before integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature grid h-fit w-full grid-cols-1 items-center gap-10 overflow-hidden lg:grid-cols-2 lg:gap-24">
            <div className="image-section order-first grid size-full grid-cols-1 place-content-center overflow-hidden">
              <img
                src={featImg2}
                alt=""
                draggable="false"
                className="mx-auto h-auto w-full"
              />
            </div>
            <div className="content-section order-last h-fit w-full">
              <div className="content-heading">
                <h3 className="mb-5 text-2xl font-medium leading-5 text-gray-950">
                  AI Framework
                </h3>
                <p className="leading-6 text-gray-700">
                Our AI Framework provides organizations with a structured approach to AI governance, ensuring AI models operate within legal, ethical, and security guidelines while driving innovation.
                </p>
              </div>
              <div className="feature-list mb-7 pl-2">
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">AI Governance Structure: </h4>
                    <p className="text-gray-700">
                    Defining roles, policies, and oversight mechanisms.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Risk & Impact Assessment: </h4>
                    <p className="text-gray-700">
                      Proactively addressing AI-related risks.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Ethical AI Guidelines: </h4>
                    <p className="text-gray-700">
                    Embedding fairness, transparency, and accountability.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Compliance Roadmap: </h4>
                    <p className="text-gray-700">
                      Aligning AI strategies with industry standards.
                    </p>
                  </div>
                </div>
                <div className="mt-7 flex gap-3">
                  <i className="bi bi-check-circle text-xl font-bold text-amber-600"></i>
                  <div className="content">
                    <h4 className="font-medium">Monitoring & Continuous Improvement: </h4>
                    <p className="text-gray-700">
                    Ensuring AI systems evolve safely and effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="feature grid h-fit w-full grid-cols-1 items-center gap-10 overflow-hidden lg:grid-cols-2 lg:gap-24">
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
                 Risk Assessment and Gap Analysis
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
          </div> */}
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
                 Technical Support
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
