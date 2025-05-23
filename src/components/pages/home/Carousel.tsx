import { EmblaSlide } from '../../../types'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Button from '@components/ui/button'
import { DotButton, useDotButton } from './EmblaDotButton'

//Assets
import CarouselImage1 from '@assets/carousel-1.png'
import CarouselImage2 from '@assets/carousel-2.png'

const SLIDES: EmblaSlide[] = [
  {
    title: 'Become a  PECB Certified Data Protection Officer',
    subheader: 'Protect Data. Advance Your Career. Get Certified.',
    paragraph:
      "Don't miss out on this opportunity to become a certified expert in data protection! Enroll Now and take the next step in securing your future.",
    buttonText: 'Enroll In CDPO Training Today',
    link: '/resources/cdpa-training',
    image: CarouselImage1,
    background: 'bg-gray-800',
    image_background: 'bg-gray-900',
  },
  {
    title: 'Empower Your Teachers, Transform Your School!',
    subheader:
      'You can equip your teachers, improve your classroom and design impactful learning programs.',
    paragraph:
      'Ready to empower your teachers and enhance the learning experience for your students?',
    buttonText: 'Contact Us',
    link: '/contact',
    image: CarouselImage2,
    background: 'bg-amber-950',
    image_background: 'bg-orange-900',
  },
]
const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 10000 }),
  ])

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <section className="mx-auto max-w-7xl py-12 md:px-8 lg:px-20 lg:py-24">
      <div className="embla">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-4">
            {SLIDES.map((data, index) => (
              <div
                className={`embla__slide w-full flex-[0_0_100%] lg:rounded-xl ${data.background} text-white`}
                key={index}
              >
                <div className="flex flex-col gap-x-4 space-x-4 lg:flex-row">
                  <div className="flex flex-col items-center justify-center space-y-3 px-5 py-8 lg:w-3/5 lg:items-start lg:space-y-6 lg:px-10 lg:py-8">
                    <div className="space-y-3 lg:space-y-5">
                      <h3 className="text-3xl font-bold lg:text-4xl">
                        {data.title}
                      </h3>
                      <p className="text-md font-semibold text-gray-200 lg:text-xl">
                        {data.subheader}
                      </p>
                    </div>
                    <span className="text-md text-gray-300">
                      {data.paragraph}
                    </span>
                    <div className="mt-8 flex w-full flex-col items-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                      <Button
                        as="link"
                        to={data.link}
                        className="w-full rounded-lg bg-amber-400 px-8 py-4 text-center text-lg font-semibold text-amber-900 transition duration-300 hover:bg-amber-500 lg:w-auto"
                      >
                        {data.buttonText}
                      </Button>
                      <Button
                        as="link"
                        variant="outline"
                        className="flex w-full items-center justify-center gap-x-2 border-gray-300 px-8 py-4 text-center text-gray-100 transition duration-300 lg:w-auto lg:border-none lg:text-left lg:hover:bg-gray-100 lg:hover:text-gray-900"
                        to={data.link}
                      >
                        <span>Learn More</span>
                        <span className="hidden lg:block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </span>
                      </Button>
                    </div>
                  </div>
                  <div
                    className={`lg:h-fit lg:w-2/5 ${data.image_background} hidden rounded-e-lg p-4 lg:block`}
                  >
                    <img
                      src={data.image}
                      draggable={false}
                      alt={data.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls mt-4 flex w-full items-center justify-center gap-8 space-x-4">
          <div className="embla__dots">
            {Array.from({ length: SLIDES.length }).map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`embla__dot ml-2 h-3 w-3 rounded-full text-white ${
                  index === selectedIndex ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel
