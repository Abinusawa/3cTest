import Accordion from '@components/ui/Accordion'
import Icon from '@components/ui/icons'

export default function FactsAndQuestion() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto h-fit w-full max-w-7xl px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-y-3 text-center md:mb-16">
          <h2 className="text-2xl font-bold md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="text-md text-gray-500">
            Everything you need to know about 3Consulting
          </p>
        </div>
        <div className="mx-auto flex justify-center divide-y divide-gray-200 md:max-w-3xl">
          <Accordion className="w-full">
            <Accordion.Item index={0} className="border-none py-4">
              <Accordion.Trigger
                triggerOpen={<Icon.PlusIcon />}
                triggerClose={<Icon.MinusIcon />}
              >
                <p className="text-md font-medium">
                  What data protection services does 3Consulting offer across Africa?
                </p>
              </Accordion.Trigger>
              <Accordion.Content>
                <p>
                  We offer audits, policy development, staff training, outsourced DPO services, and compliance support with laws such as Nigeria’s NDPA, South Africa’s POPIA, Kenya’s Data Protection Act, and Ghana’s Data Protection Act, and other regional laws.
                </p>
              </Accordion.Content>
            </Accordion.Item>
            <div className="border border-gray-200" />
            <Accordion.Item index={1} className="border-none py-4">
              <Accordion.Trigger
                triggerOpen={<Icon.PlusIcon />}
                triggerClose={<Icon.MinusIcon />}
              >
                <p className="text-md font-medium">
                  How does 3Consulting support project management?
                </p>
              </Accordion.Trigger>
              <Accordion.Content>
                <span>
                  We provide project planning, implementation support, and training to help organizations deliver projects efficiently and meet strategic goals.
                </span>
              </Accordion.Content>
            </Accordion.Item>
            <div className="border border-gray-200" />
            <Accordion.Item index={2} className="border-none py-4">
              <Accordion.Trigger
                triggerOpen={<Icon.PlusIcon />}
                triggerClose={<Icon.MinusIcon />}
              >
                <p className="text-md font-medium">
                  What technology and cybersecurity services do you provide?
                </p>
              </Accordion.Trigger>
              <Accordion.Content>
                <span>
                  Our services include software solutions, cybersecurity assessments, breach simulations, and security policy development.
                </span>
              </Accordion.Content>
            </Accordion.Item>
            <div className="border border-gray-200" />
            <Accordion.Item index={3} className="border-none py-4">
              <Accordion.Trigger
                triggerOpen={<Icon.PlusIcon />}
                triggerClose={<Icon.MinusIcon />}
              >
                <p className="text-md font-medium">
                  What Edutech solutions are available at 3Consulting?
                </p>
              </Accordion.Trigger>
              <Accordion.Content>
                <span>
                  We deliver training and tools for digital learning, including LMS setup, content development, and virtual classroom support.
                </span>
              </Accordion.Content>
            </Accordion.Item>
            <div className="border border-gray-200" />
            <Accordion.Item index={4} className="border-none py-4">
              <Accordion.Trigger
                triggerOpen={<Icon.PlusIcon />}
                triggerClose={<Icon.MinusIcon />}
              >
                <p className="text-md font-medium">
                  How does 3Consulting support AI governance and solutions?
                </p>
              </Accordion.Trigger>
              <Accordion.Content>
                <p>
                  We help organizations develop AI strategies, assess risks, and ensure ethical and regulatory compliance.
                </p>
              </Accordion.Content>
            </Accordion.Item>
            <div className="border border-gray-200" />
            <Accordion.Item index={5} className="border-none py-4">
              <Accordion.Trigger
                triggerOpen={<Icon.PlusIcon />}
                triggerClose={<Icon.MinusIcon />}
              >
                <p className="text-md font-medium">
                  Who should take your PECB courses and trainings?
                </p>
              </Accordion.Trigger>
              <Accordion.Content>
                <p>
                  Our PECB-certified courses, including ISO/IEC 27701 and 27035, are ideal for professionals and organizations seeking staff training in data protection and incident response.
                </p>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
