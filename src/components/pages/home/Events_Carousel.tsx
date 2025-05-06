import { EmblaSlide } from '../../../types'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Link } from '@tanstack/react-router'
import { useDotButton, DotButton } from './EmblaDotButton'

// Assets
import CarouselImage1 from '@assets/events/evt1.jpg'
import CarouselImage2 from '@assets/events/evt3.jpg'
import CarouselImage3 from '@assets/events/evt2.jpg'

const SLIDES: EmblaSlide[] = [
  {
    title: 'Unlocking Compliance:',
    subheader: 'What Zambia Data Privacy Means to You and Your Business.',
    link: '/resources/events',
    image: CarouselImage1,
  },
  {
    title: 'Data Privacy Webinar',
    subheader: 'Role of Employees in Safe guarding data Privacy',
    link: '/resources/events',
    image: CarouselImage2,
  },
  {
    title: 'Introduction To Data Privacy and Data Protection',
    subheader: 'The Essential best practices for your business',
    link: '/resources/events',
    image: CarouselImage3,
  },
]

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ])
  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <section className="mx-auto max-w-7xl py-12 px-4 md:px-8 lg:px-20">
    {/* Section Title */}
    <div className="mb-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        Events & Highlights
      </h2>
      <p className="text-gray-500 mt-2">
        Explore our key initiatives and opportunities.
      </p>
    </div>

    <div className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          {SLIDES.map((data, index) => (
            <Link
              to={data.link}
              key={index}
              className="embla__slide w-[300px] flex-[0_0_auto] group relative rounded-xl overflow-hidden shadow-lg aspect-square"
            >
              <img
                src={data.image}
                alt={data.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <h3 className="text-white text-lg font-semibold mb-1">
                  {data.title}
                </h3>
                <p className="text-sm text-gray-300">{data.subheader}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Dot Buttons */}
      <div className="embla__controls mt-6 flex justify-center gap-4">
        {SLIDES.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`h-3 w-3 rounded-full ${
              index === selectedIndex ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Carousel
