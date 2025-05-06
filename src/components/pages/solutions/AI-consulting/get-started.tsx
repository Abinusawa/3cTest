import Button from '@components/ui/button'
import { Link } from '@tanstack/react-router'

export default function GetStarted() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl md:px-8 lg:mx-auto">
        <div className="bg-gray-900 p-8 md:rounded-2xl md:p-12">
          <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-left">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Start your CDPO training today
              </h2>
              <p className="text-lg text-gray-300">
                Enrol Now and take the next step in securing your future.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col-reverse gap-4 md:w-fit lg:flex-row">
              <Button className="w-full bg-white text-gray-900 lg:w-fit">
                <Link to="/resources/cdpo-training">Learn More</Link>
              </Button>
              <Button className="w-full lg:w-fit">
                <Link to="/contact">Enrol Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
