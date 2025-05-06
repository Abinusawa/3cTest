import FeatureIcon from '@components/ui/featureicon'
import { Link } from '@tanstack/react-router'
import pecbLogo from '@assets/pecb-logo.png'
const EnrollPECB: React.FC = () => {
  return (
    <section id="Enroll-PECB" className="pb-12 lg:pb-16">
      <div className="mx-auto flex h-fit w-full max-w-7xl px-5 md:px-6">
        <div className="grid w-full grid-cols-1 gap-16 lg:mt-12 lg:grid-cols-2">
          <div className="text-contents h-fit">
            <h5 className="mb-5 w-fit text-xl font-semibold text-orange-500">
              Why Become a Certified Data Protection Officer?
            </h5>
            <div className="reasons flex flex-col gap-10">
              <div className="reason flex gap-4">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-person text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Expertise in Data Privacy
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    Gain an in-depth understanding of global data protection
                    laws and principles, ensuring that your organization remains
                    compliant and protects personal data.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-book text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Career Advancement
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    As data privacy becomes increasingly vital, the demand for
                    certified DPOs is rising, making certification a valuable
                    asset for career growth.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-person text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-xl font-semibold text-gray-900">
                    Organizational Trust
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    Certified DPOs help businesses build trust with customers,
                    partners, and regulatory authorities by demonstrating a
                    commitment to data protection.
                  </p>
                </div>
              </div>
              <div className="benefits grid grid-cols-1 gap-5 md:grid-cols-3">
                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-mortarboard mx-auto block w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Hands-on-Learning</p>
                </div>
                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-trophy mx-auto block w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Certification</p>
                </div>
                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-person-check mx-auto block w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Expert Instructors</p>
                </div>
              </div>
            </div>
          </div>
          <div className="training-content flex items-center justify-center">
            <div className="enrol-card flex flex-col rounded-2xl border border-gray-200 bg-white shadow-xl">
              <div className="enrol-card-header">
                <div className="header-content grid h-fit w-full grid-cols-4 items-center justify-between border-b border-gray-200 p-6 pt-8 lg:p-8 lg:pb-6">
                  <div className="heading-subtext col-span-3 flex h-fit w-full flex-col gap-4">
                    <div className="heading-badge flex items-center">
                      <h3 className="mr-4 text-xl font-semibold">
                        PECB Certified Data Protection Officer (CDPO) Training
                      </h3>
                      <div className="badge w-fit rounded-full border border-orange-600 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600 md:text-base">
                        Open
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Enroll today and take the next step in your career
                    </p>
                  </div>
                  <div className="image-section ml-auto flex w-1/2 items-center justify-center mr-[10px]">
                    <img
                      src={pecbLogo}
                      alt="pecb-logo"
                      className="flex h-full shrink grow-0"
                    />
                    {/* <img
                      src={pecbLogo}
                      alt="pecb-logo"
                      className="flex h-full shrink grow-0"
                    /> */}
                  </div>
                </div>
              </div>
              <div className="course-highlight h-fit w-full p-6 lg:p-8">
                <div className="title-subtitle mb-6 h-fit w-full">
                  <h4 className="font-semibold">Course Highlights</h4>
                  <p className="text-gray-700">
                    Everything you will learn in this course
                  </p>
                </div>
                <div className="course-highlights grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">
                      Understanding Data Protection Regulations
                    </p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">
                      Data Security & Risk Management{' '}
                    </p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">
                      Data subject rights and incident response
                    </p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">Implementation & Compliance</p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">DPO Responsibilities </p>
                  </div>
                </div>
              </div>
              <div className="enroll-cta flex w-full justify-center border-t border-gray-200 p-6 lg:p-8">
                <button className="w-full cursor-pointer rounded-lg bg-amber-400 px-6 py-3 font-medium text-gray-900 shadow-md hover:bg-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95 active:bg-amber-600">
                  <Link to="/contact">Enroll Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>      
      <br />
      <br />
      <div className="mx-auto flex h-fit w-full max-w-7xl px-5 md:px-6">
        <div className="grid w-full grid-cols-1 gap-16 lg:mt-12 lg:grid-cols-2">
          <div className="text-contents h-fit">
            <h5 className="mb-5 w-fit text-xl font-semibold text-orange-500">
              Why Choose PECB ISO/IEC 27001 Certification?
            </h5>
            <div className="reasons flex flex-col gap-10">
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-card-checklist text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    About Privacy Information Management with ISO/IEC 27701 Certification
                  </h3>
                  <p className="leading-relaxed text-gray-700">
                  As privacy rules evolve, ISO/IEC 27701 enhances ISO/IEC 27001 with PIMS (Privacy Information Management System). 
                  3Consulting provides training for implementation and auditing.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-person-check text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  	Privacy & Data Protection Compliance
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    Gain a deep understanding of privacy information management and compliance with global regulations.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-check-square text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Competitive Advantage
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    Differentiate yourself as a certified professional in a high-demand field.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-diagram-2 text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Comprehensive Risk Management
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                  Learn how to integrate privacy frameworks within ISMS to enhance data governance.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-safe2 text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Organizational Trust
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    Certified experts help businesses establish transparent and compliant data protection practices.
                  </p>
                </div>
              </div>
              <div className="benefits grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-person-video3 mx-auto block w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Live-Online</p>
                </div>

                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-person-workspace mx-auto block w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Self-Paced</p>
                </div>
              </div>
            </div>
          </div>
          <div className="training-content flex items-center justify-center">
            <div className="enrol-card flex flex-col rounded-2xl border border-gray-200 bg-white shadow-xl">
              <div className="enrol-card-header">
                <div className="header-content grid h-fit w-full grid-cols-4 items-center justify-between border-b border-gray-200 p-6 pt-8 lg:p-8 lg:pb-6">
                  <div className="heading-subtext col-span-4 flex h-fit w-full flex-col gap-2">
                    <div className="heading-badge flex items-center">
                      <h3 className="mr-4 text-xl font-semibold">
                        ISO/IEC 27701 Lead Auditor & Lead Implementer Training (Self-Study and e-learning)
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      Contact us today to learn more
                    </p>
                  </div>
                </div>
              </div>
              <div className="course-highlight h-fit w-full p-6 lg:p-8">
                <div className="title-subtitle mb-6 h-fit w-full">
                  <h4 className="font-semibold">Course Highlights</h4>
                  <p className="text-gray-700">
                    Everything you will learn in this course
                  </p>
                </div>
                <div className="course-highlights grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">Privacy risk assessment and mitigation strategies</p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">Data processing principles and data subject rights</p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">
                      Implementation and auditing of PIMS
                    </p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">
                      ISO/IEC 27701 framework and its relation to ISO/IEC 27001
                    </p>
                  </div>
                </div>
              </div>
              <div className="enroll-cta flex w-full justify-center border-t border-gray-200 p-6 lg:p-8">
                <button

                
                 className="w-full cursor-pointer rounded-lg bg-amber-400 px-6 py-3 font-medium text-gray-900 shadow-md hover:bg-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95 active:bg-amber-600">
                  <Link to="/contact">Enroll Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <br />
      <br />

      <div className="mx-auto flex h-fit w-full max-w-7xl px-5 md:px-6">
        <div className="grid w-full grid-cols-1 gap-16 lg:mt-12 lg:grid-cols-2">
          <div className="text-contents h-fit">
            <h5 className="mb-5 w-fit text-xl font-semibold text-orange-500">
              Why Choose PECB ISO/IEC 27001 Certification?
            </h5>
            <div className="reasons flex flex-col gap-10">
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-card-checklist text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Become a PECB Certified ISO/IEC 27001 Professional
                  </h3>
                  <p className="leading-relaxed text-gray-700">
                    Information security is crucial today. ISO/IEC 27001 provides a global ISMS framework. 
                    3Consulting offers expert-led training for auditing and implementation.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-shield-check text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Enhance Cybersecurity Expertise
                  </h3>
                  <p className="leading-relaxed text-gray-700">
                    Gain comprehensive knowledge of ISMS principles, risk assessment, and security controls.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-trophy-fill text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Career Growth
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                  Stand out in the competitive field of information security with an internationally recognized certification.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-check-square text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Compliance & Risk Management
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    Help organizations align with regulatory requirements and mitigate cybersecurity risks.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-shield-plus text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Industry Trust
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                   Certified professionals improve credibility by ensuring data protection and security compliance.
                  </p>
                </div>
              </div>
              
              <div className="benefits grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-person-video3 mx-auto block w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Live-Online</p>
                </div>

                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-person-workspace mx-auto block w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Self-Paced</p>
                </div>
              </div>
            </div>
          </div>
          <div className="training-content flex items-center justify-center">
            <div className="enrol-card flex flex-col rounded-2xl border border-gray-200 bg-white shadow-xl">
              <div className="enrol-card-header">
                <div className="header-content grid h-fit w-full grid-cols-4 items-center justify-between border-b border-gray-200 p-6 pt-8 lg:p-8 lg:pb-6">
                  <div className="heading-subtext col-span-4 flex h-fit w-full flex-col gap-2">
                    <div className="heading-badge flex items-center">
                      <h3 className="mr-4 text-xl font-semibold">
                        ISO/IEC 27701 Lead Auditor & Lead Implementer Training (Self-Study and e-learning)
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      Contact us today to learn more
                    </p>
                  </div>
                </div>
              </div>
              <div className="course-highlight h-fit w-full p-6 lg:p-8">
                <div className="title-subtitle mb-6 h-fit w-full">
                  <h4 className="font-semibold">Course Highlights</h4>
                  <p className="text-gray-700">
                    Everything you will learn in this course
                  </p>  
                </div>
                <div className="course-highlights grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">Risk management and assessment methodologies</p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">ISMS implementation best practices</p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">
                    Audit principles and techniques for ISO/IEC 27001 compliance
                    </p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">
                      Understanding ISO/IEC 27001 framework and security controls
                    </p>
                  </div>
                </div>
              </div>
              <div className="enroll-cta flex w-full justify-center border-t border-gray-200 p-6 lg:p-8">
                <button className="w-full cursor-pointer rounded-lg bg-amber-400 px-6 py-3 font-medium text-gray-900 shadow-md hover:bg-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95 active:bg-amber-600">
                <Link to="/contact">Enroll Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className="mx-auto flex h-fit w-full max-w-7xl px-5 md:px-6">
        <div className="grid w-full grid-cols-1 gap-16 lg:mt-12 lg:grid-cols-2">
          <div className="text-contents h-fit">
            <h5 className="mb-5 w-fit text-xl font-semibold text-orange-500">
              Why Choose PECB ISO/IEC 42001 Certification?
            </h5>
            <div className="reasons flex flex-col gap-10">
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-card-checklist text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    About AI Governance with ISO/IEC 42001 Certification
                  </h3>
                  <p className="leading-relaxed text-gray-700">
                    AI is reshaping industries, making ethical governance vital. ISO/IEC 42001 sets the standard for AI Management Systems. 
                    3Consulting offers expert training in AI governance, risk, and compliance.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-person-check text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Regulatory Readiness
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    Stay ahead of emerging AI regulations and ensure organizational compliance.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-cpu text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Career Advancement
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    As AI adoption grows, certified professionals will be in high demand to implement and audit AI systems.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-cpu text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Trust & Transparency
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    Help organizations build responsible AI ecosystems, ensuring accountability and bias mitigation.
                  </p>
                </div>
              </div>
              <div className="reason flex gap-4 md:gap-6">
                <FeatureIcon
                  className="transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-md"
                  icon={
                    <i className="bi bi-cpu text-2xl leading-none transition-all duration-300 group-hover:border-orange-500 group-hover:text-orange-500"></i>
                  }
                />
                <div className="reason-content">
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    Pioneer AI Governance
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    Gain a thorough understanding of AI management systems, ethical AI principles, and risk mitigation.
                  </p>
                </div>
              </div>
              <div className="benefits grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-person-video3 mx-auto block w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Live-Online</p>
                </div>

                <div className="benefit flex flex-col items-center gap-2 px-3 py-4">
                  <i className="bi bi-person-workspace mx-auto block w-fit text-3xl text-orange-600"></i>
                  <p className="text-center">Self-Paced</p>
                </div>
              </div>
            </div>
          </div>
          <div className="training-content flex items-center justify-center">
            <div className="enrol-card flex flex-col rounded-2xl border border-gray-200 bg-white shadow-xl">
              <div className="enrol-card-header">
                <div className="header-content grid h-fit w-full grid-cols-4 items-center justify-between border-b border-gray-200 p-6 pt-8 lg:p-8 lg:pb-6">
                  <div className="heading-subtext col-span-4 flex h-fit w-full flex-col gap-2">
                    <div className="heading-badge flex items-center">
                      <h3 className="mr-4 text-xl font-semibold">
                        ISO/IEC 42001 Lead Auditor & Lead Implementer Training (Self-Study and e-learning)
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      Contact us today to learn more
                    </p>
                  </div>
                </div>
              </div>
              <div className="course-highlight h-fit w-full p-6 lg:p-8">
                <div className="title-subtitle mb-6 h-fit w-full">
                  <h4 className="font-semibold">Course Highlights</h4>
                  <p className="text-gray-700">
                    Everything you will learn in this course
                  </p>
                </div>
                <div className="course-highlights grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">ISO/IEC 42001 framework and compliance requirements</p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">AI risk management and ethical considerations</p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">
                      AI lifecycle governance and bias mitigation
                    </p>
                  </div>
                  <div className="highlight flex">
                    <i className="bi bi-check-circle mr-3 text-2xl text-orange-600"></i>
                    <p className="text-gray-700">
                      Implementation and auditing of AI Management Systems (AIMS)
                    </p>
                  </div>
                </div>
              </div>
              <div className="enroll-cta flex w-full justify-center border-t border-gray-200 p-6 lg:p-8">
                <button className="w-full cursor-pointer rounded-lg bg-amber-400 px-6 py-3 font-medium text-gray-900 shadow-md hover:bg-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95 active:bg-amber-600">
                <Link to="/contact">Enroll Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnrollPECB
