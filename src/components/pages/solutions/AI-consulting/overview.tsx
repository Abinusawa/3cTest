export default function Overview() {
  return (
    <section id="overview" className="py-16 w-full bg-white lg:py-24">
      <div className="px-5 mx-auto w-full max-w-7xl md:px-8">
        <div className="container-none">
          <div className="grid grid-cols-1 gap-5 items-start  w-full section-heading lg:mb-0 lg:grid-cols-2">
            <div className="heading-subheading lg:text-left lg:mx-0">
              <h5 className="mt-2 mb-3 text-sm font-semibold text-amber-600 lg:w-fit">
                Overview
              </h5>
              <h2 className="text-2xl font-semibold leading-[1.2] mb-4 md:mb-5 text-gray-900 md:text-4xl ">
                Are You Fully Compliant with AI Regulations?
              </h2>
              {/* <p className="text-lg text-gray-600 md:text-xl">
                Ensure Compliance and Safeguard Your Business with Our Expert
                Data Protection Solutions.
              </p> */}
            </div>
            <div className="space-y-4 text-base text-gray-700 md:text-lg">
              <p>
                Our AI Governance service helps organizations develop responsible, transparent, and compliant AI systems. We guide you through building ethical AI strategies, assessing risks, and aligning with global regulatory standards to ensure your AI solutions inspire trust and drive innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
