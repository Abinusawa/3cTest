import Ayo from '@assets/team/eso.jpg'
import Lola from '@assets/team/lola.jpg'
import Ifunanya from '@assets/team/ify.jpg'
import Victor from '@assets/team/victor.jpg'
import { Link } from '@tanstack/react-router'

const OurTeamSection: React.FC = () => {
  return (
    <section id="team-section" className="w-full bg-gray-50 py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="container-none grid grid-cols-1 lg:grid-cols-3">
          <div className="section-heading mb-16 w-full lg:mb-0">
            <div className="heading-subheading mx-auto w-full text-center lg:mx-0 lg:text-left">
              <h5 className="mb-3 mt-2 text-sm font-semibold text-amber-600 lg:w-fit">
                Our Value
              </h5>
              <h2 className="mb-4 text-2xl font-semibold leading-[1.2] text-gray-900 lg:mb-5 lg:text-3xl">
                Meet Our Dedicated Team
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                A diverse group of experts committed to your success
              </p>
            </div>
            {/* Make this button our primary component button later  */}
            <button className="min-w-50 mt-8 w-full cursor-pointer rounded-lg bg-amber-400 px-4 py-3 font-medium text-gray-900 shadow-md hover:bg-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:scale-95 active:bg-amber-600 lg:w-3/4">
              <Link to="/contact">Contact us</Link>
            </button>
          </div>
          <div className="content-section col-span-2 grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 lg:pl-24">
            {teamMembers.map((member) => (
              <div key={member.name} className="member flex gap-5 lg:flex-col">
                <div className="avatar mb-5 size-20 shrink-0 rounded-full bg-gray-200 text-gray-700 lg:size-24">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="size-full rounded-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">{member.name}</h4>
                  <h5 className="text-base text-amber-600">{member.role}</h5>
                  {/* <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur. Cursus at elit
                    vehicula nulla orci amet
                  </p> */}
                  <div className="mt-4 flex gap-4">
                    <a
                      href="https://x.com/3consultingLtd?t=yiIw7N7BmD4XKXPG1QBttQ&s=08"
                      className="text-2xl text-gray-600 hover:text-gray-950"
                    >
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a
                      href={member.linkedin ?? '#'}
                      className="text-2xl text-gray-600 hover:text-blue-600"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeamSection

const teamMembers = [
  // {
  //   image: Ayomide,
  //   name: 'Ayomide Ayodele',
  //   role: 'CIPP/E(IAPP), CDPO(PECB).',
  //   linkedin:
  //     'https://www.linkedin.com/in/ayomide-ayodele-cipp-e-cdpo-aa3537214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  // },
  // {
  //   image: Grace,
  //   name: 'Grace Nwokoye',
  //   role: 'CIPM(IAPP), ISO/IEC 27701.',
  //   linkedin:
  //     'https://www.linkedin.com/in/grace-nwokoye?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  // },
  {
    image: Ayo,
    name: 'Ayo Eso',
    role: 'CEO, PH.D, CIPM(IAPP).',
    linkedin:
      'https://www.linkedin.com/in/ayomide-ayodele-cipp-e-cdpo-aa3537214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    image: Ifunanya,
    name: 'Ifunanya Onyiriagwu',
    role: 'CIPP/E(IAPP), ISO/IEC 27035(Lead Incicent Response Manager),CDPO(PECB).',
    linkedin:
    'https://www.linkedin.com/in/ifunanya-onyiriagwu-cipp-e-981b17156',
  },
  {
    image: Lola,
    name: 'Omolola Dada',
    role: 'CDPO(PECB).',
    linkedin:
      'https://www.linkedin.com/in/omolola-dada-1b2693231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    image: Victor,
    name: 'Victor Ovie-Whiskey',
    role: 'CIPT(IAPP).',
    linkedin:
      'https://www.linkedin.com/in/ovie-whiskey-victor-1833a1235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
]
