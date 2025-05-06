import { createFileRoute } from '@tanstack/react-router'

import Footer from '@components/ui/Footer'
import Privacy from '@components/pages/resources/privacy-policy/Privacy'

export const Route = createFileRoute('/resources/privacy-policy')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <>
      <Privacy />

      <Footer />
    </>
  )
}
