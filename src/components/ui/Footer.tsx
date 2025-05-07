
import audit_trust from '@assets/3C-AuditTrust.png'
// import Button from './button'
import { Link } from '@tanstack/react-router'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className='audit-trust mx-auto'>
                <img src={audit_trust} alt="Logo" className="h-[150px] " />
            </div>

        <div className="border border-gray-200" />
        <br />

        <div className="flex flex-col items-center justify-between  md:flex-row">
          <div className="content flex w-full flex-col place-content-center items-center justify-center text-gray-400 lg:grid lg:grid-cols-2">
            <div className="social-links mb-6 flex gap-8 text-xl lg:mb-0">
              <a href="#" target="_blank" className="hover:text-gray-600">
                <i className="b bi-facebook"></i>
              </a>
              <a href="#" target="_blank" className="hover:text-gray-600">
                <i className="b bi-twitter-x"></i>
              </a>
              <a href="#" target="_blank" className="hover:text-gray-600">
                <i className="b bi-linkedin"></i>
              </a>
            </div>
            {/* <ul className="flex flex-wrap justify-center gap-4">
                {[ "Nigeria", "Zimbabwe", "Zambia", "Nigeria", "South Africa"].map((country) => (
                  <li
                    key={country}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full shadow hover:bg-amber-100 transition-colors duration-200"
                  >
                    {country}
                  </li>
                ))}
              </ul> */}

            {/* Removed Audit Trust Mark - added to about us page. */}
            {/* <div className='audit-trust mx-auto'>
                <img src={audit_trust} alt="Logo" className="h-[150px] " />
            </div> */}
            {/* <Button
              to="/"
              as="link"
              className="order-first flex mx-auto mb-10 lg:order-none lg:mb-0 "
            >
              <img src={logo} alt="Logo" className="w-[100px]" />
              <img src={logo2} alt="Logo" className="h-[50px]" />
              <img src={logo3} alt="Logo" className="w-[100px]" />
              
            </Button> */}
            
            <div className="footer-text">
              <p className="lg:text-right">
                <Link
                  to="/resources/privacy-policy"
                  className="text-nowrap italic text-orange-500"
                  >
                  Privacy policy
                </Link>
                {', '}
                <Link
                  to="/resources/cookie-policy"
                  className="text-nowrap italic text-orange-500"
                >
                  Cookie policy
                </Link>
                <br />
                  © {new Date().getFullYear()} 3consulting, All rights reserved.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
