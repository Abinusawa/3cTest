// import Logo from '@assets/Logo.png'
import Logo from '@assets/3c_edit.png'
import { useState, useCallback, useEffect } from 'react'
import Button from './button'
import { useHoveredElement } from '@hooks/useHoveredElement'
import { motion, AnimatePresence } from 'framer-motion'

type NavItem = {
  label: string
  to?: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  {
    label: 'Services',
    // to: '/solutions/data-protection',
    children: [
      { label: 'Data Protection', to: '/solutions/data-protection' },
      {
        label: 'Training',
        children: [
          { label: 'PECB Courses', to: '/solutions/pecb' },
          { label: 'Other Trainings', to: '/solutions/training' },
        ]
      },
      // { label: 'Training', to: '/solutions/training' },
      { label: 'Cyber-Security', to: '/solutions/cyber-security' },
      { label: 'AI Consulting' ,to: '/solutions/AI-consulting' },
      { label: 'Project Management', to: '/solutions/project-management' },
      { label: 'Technology Services', to: '/solutions/technology-services' },
      // { label: 'CDPO Training', to: '/solutions/cdpo-training' },
      { label: 'Educational Technology Training', to: '/solutions/educational-technology-training' },
      // New Added Services
      // { label: 'PECB Courses' ,to: '/solutions/pecb' },
    ],
  },
  {
    label: 'Resources',
    // to: '/resources/cdpo-training',
    children: [
      //{ label: 'Blog', to: '/resources/blog' },
      // { label: 'CDPO Training', to: '/resources/cdpo-training' },
      // {
      //   label: 'Educational Technology Training',
      //   to: '/resources/educational-technology-training',
      // },
      {
        label: 'Events', to: '/resources/events',
      },
      {
        label: 'Policies',
        children: [
          {  label: 'Privacy Policy', to: '/resources/privacy-policy', },
          {  label: 'Cookie Policy', to: '/resources/cookie-policy', },
        ]
      },
    ],
  },
  {
    label: 'Contact Us',
    to: '/contact',
  },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const { activeElement, onHover, onLeave, setElementRef } =
    useHoveredElement(500)

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <div
      id="Nav-section"
      className="sticky top-0 z-50 mx-auto h-fit w-full max-w-7xl px-5 md:px-8"
    >
      <nav className="w-full bg-white py-4">
        <section className="mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-4">
        <img src={Logo} alt="logo" className='h-[25px]'/>
          <ul className="ml-20 hidden space-x-4 md:flex">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <div
                  className="relative"
                  onMouseEnter={() => onHover(item.label)}
                  onMouseLeave={onLeave}
                >
                  <Button
                    to={item.to || '#'}
                    as="link"
                    className="bg-transparent text-gray-600 shadow-none ring-0 focus:underline"
                  >
                    {item.label}
                  </Button>

                  {item.children && activeElement === item.label && (
                    <div
                      ref={setElementRef(item.label)}
                      className="absolute top-full left-0 z-50"
                    >
                      <Dropdown items={item.children} />
                    </div>
                  )}
                </div>
              </li>
            ))}
        </ul>
        </div>

          {/* <div className="flex items-center gap-x-4">
            <img src={Logo} alt="logo" className='h-[25px]'/>
            <ul className="ml-20 hidden space-x-4 md:flex">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => onHover(item.label)}
                  onMouseLeave={onLeave}
                >
                  <Button
                    to={item.to || '#'}
                    as="link"
                    className="bg-transparent text-gray-600 shadow-none ring-0 focus:underline"
                  >
                    {item.label}
                  </Button>
                  {item.children && activeElement === item.label && (
                    <div ref={setElementRef(item.label)}>
                      <Dropdown items={item.children} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div> */}
          <div className="hidden md:block">
            <Button
              to="/contact"
              as="link"
              className="cursor-pointer bg-amber-400 px-4 py-3 text-sm text-accent-dark-ui hover:text-amber-600"
            >
              Contact Us
            </Button>
          </div>
          <button
            className="group z-50 inline-flex size-10 items-center justify-center rounded-full bg-white text-center text-slate-800 transition md:hidden"
            aria-pressed={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="pointer-events-none size-6 fill-current"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
                y="7"
                width="9"
                height="2"
                rx="1"
              ></rect>
              <rect
                className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45"
                y="7"
                width="16"
                height="2"
                rx="1"
              ></rect>
              <rect
                className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:-rotate-[225deg]"
                y="7"
                width="9"
                height="2"
                rx="1"
              ></rect>
            </svg>
          </button>
        </section>
      </nav>
      <SmallNav isOpen={isOpen} onClose={toggleMenu} />
    </div>
  )
}

// const Dropdown = ({ items }: { items: NavItem[] }) => {
//   return (
//     <div className="absolute left-0 top-full mt-1 w-72 whitespace-nowrap rounded-md bg-white py-2 shadow-md">
//       {items.map((item, index) => (
//         <Button
//           key={index}
//           as="link"
//           to={item.to || '#'}
//           className="block w-full px-5 py-2 text-left text-sm text-gray-700"
//         >
//           {item.label}
//         </Button>
//       ))}
//     </div>
//   )
// }

const Dropdown = ({ items }: { items: NavItem[] }) => {
  return (
    <div className="absolute left-0 top-full mt-1 w-72 rounded-md bg-white py-2 shadow-md">
      {items.map((item, index) => (
        <div key={index} className="relative group">
          <Button
            as="link"
            to={item.to || '#'}
            className="block w-full px-5 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            {item.label}
          </Button>
          {item.children && (
            // <div className="absolute left-full top-0 ml-1 hidden w-72 whitespace-nowrap rounded-md bg-white py-2 shadow-md group-hover:block">
            <div className="absolute left-full top-0 ml-1 hidden w-72 whitespace-nowrap rounded-md bg-orange-500 border-l-4 border-white py-2 shadow-md group-hover:block">

              <Dropdown items={item.children} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}


const SmallNav = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 300)
      return () => clearTimeout(timer)
    } else {
      setShowContent(false)
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            className="h-full w-3/4 overflow-y-auto bg-white"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <AnimatePresence>
              {showContent && (
                <motion.ul
                  className="flex flex-col items-start space-y-4 rounded-se-lg p-4 pt-8 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <li className="mb-4 size-6 w-full">
                    <img src={Logo} alt="logo" />
                  </li>
                  {navItems.map((item, index) => (
                    <RecursiveNavItem
                      key={index}
                      item={item}
                      onClose={onClose}
                    />
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const RecursiveNavItem = ({
  item,
  onClose,
  depth = 0,
}: {
  item: NavItem
  onClose: () => void
  depth?: number
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen((prev) => !prev)

  return (
    <li className={`w-full ${depth > 0 ? 'ml-4' : ''}`}>
      {item.children ? (
        <>
          <Button
            as="button"
            onClick={toggleOpen}
            className="flex w-full items-center justify-between bg-transparent p-0 text-gray-600 shadow-none hover:bg-transparent hover:text-amber-500 focus:ring-transparent active:bg-transparent active:outline-none"
          >
            {item.label}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </Button>
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                className="mt-2 space-y-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.children.map((child, index) => (
                  <RecursiveNavItem
                    key={index}
                    item={child}
                    onClose={onClose}
                    depth={depth + 1}
                  />
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Button
          as="link"
          to={item.to || '#'}
          onClick={onClose}
          className="bg-transparent text-gray-600 shadow-none hover:text-amber-500"
        >
          {item.label}
        </Button>
      )}
    </li>
  )
}
