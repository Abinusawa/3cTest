import { createFileRoute } from '@tanstack/react-router'

import Footer from '@components/ui/Footer'
import Cookies from '@components/pages/resources/cookie-policy/Cookie'

export const Route = createFileRoute('/resources/cookie-policy')({
  component: CookiePolicy,
})

function CookiePolicy() {
  return (
    <>
      <Cookies />
      <Footer />
    </>
  )
}
