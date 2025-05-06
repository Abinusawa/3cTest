import Button from '@components/ui/button'

export default function Contactus() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-12 lg:px-20 lg:py-24">
      <div className="w-full">
        <div className="flex h-fit flex-col gap-x-4 rounded-xl bg-orange-900 text-white lg:flex-row">
          <div className="flex flex-col items-start justify-center space-y-6 px-5 py-8 lg:w-3/5 lg:px-10 lg:py-16">
            <div className="space-y-3 lg:space-y-5">
              <h3 className="text-3xl font-bold lg:text-4xl">
                Contact Us Today
              </h3>
              <p className="text-md font-medium text-orange-300 lg:text-xl">
                Start your journey toward efficient project management and
                expert compliance solutions today.
              </p>
            </div>
            <div className="mt-8 flex w-full flex-col items-start space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
              <Button
                as="link"
                to="/contact"
                className="w-full rounded-lg bg-amber-400 px-8 py-4 text-center text-lg font-semibold text-amber-900 transition duration-300 hover:bg-amber-500 lg:w-auto"
              >
                Contact Us
              </Button>
              <Button
                as="link"
                variant="outline"
                className="flex w-full items-center justify-center gap-x-2 bg-white px-8 py-4 text-center text-gray-800 transition duration-300 lg:w-auto lg:border-none lg:text-left lg:hover:bg-gray-100 lg:hover:text-gray-900"
                to="/solutions/project-management"
              >
                Learn more
              </Button>
            </div>
          </div>
          <div className="hidden items-center justify-center rounded-e-lg bg-gray-300/80 p-4 lg:flex lg:h-auto lg:w-2/5">
            <span className="text-4xl font-bold text-amber-900">
              3Consulting
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
