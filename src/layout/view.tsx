import { Outlet, useLocation } from '@tanstack/react-router'
import { Toaster } from 'sonner'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import NavBar from '@components/ui/nav-bar'

// const TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string

const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/about-us': 'About Us',
  '/solutions/data-protection': 'Data Protection Solutions',
  '/solutions/project-management': 'Project Management Solutions',
  '/solutions/technology-services': 'Technology Services',
  '/solutions/cdpo-training': 'CDPO Training',
  '/solutions/pecb': 'PECB Courses',
  '/solutions/training': 'Other Trainings',
  '/solutions/cyber-security': 'Cyber Security',
  '/solutions/AI-consulting': 'AI Consulting',
  '/solutions/educational-technology-training':
    'Educational Technology Training',
  '/resources/blog': 'Blog',
  // '/resources/cdpo-training': 'CDPO Training',
  // '/resources/educational-technology-training':'Educational Technology Training',
  '/resources/events': 'Events',
  '/resources/privacy-policy': 'Privacy Policy',
  '/resources/cookie-policy': 'Cookie Policy',
  '/contact': 'Contact Us',
}

function View() {
  const location = useLocation()

  useEffect(() => {
    const title = pageTitles[location.pathname] || '3Consulting | Home'
    document.title = `3Consulting | ${title}`

    // ReactGA.initialize(TRACKING_ID)
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
      href: location.href,
      title,
    })
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Toaster />
      <div className="sticky top-0 z-20 border-b border-gray-300 bg-white">
        <NavBar />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  )
}

export default View
