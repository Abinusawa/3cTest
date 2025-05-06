import React from 'react'
import heroImage from '@assets/home-hero.png'

import Button from '@components/ui/button'
import { partners } from '@utils/index'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Hero: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ])
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-20">
      <div className="grid w-full grid-cols-1 items-center justify-between pt-24 md:grid md:grid-cols-2 md:pt-32">
        <div className="mb-6 w-full lg:mb-0">
          {/* <div
            id='badge'
            className='inline-flex items-center rounded-lg border-2 max-w-full md:w-fit border-gray-400/40 px-2 py-1 mb-4 '
          >
            <div className='flex items-center border-2 border-gray-400/40 px-2 py-1 rounded-md'>
              <span className='relative inline-flex items-center justify-center w-3 h-3'>
                <span className='absolute w-full h-full bg-pink-300 animate-ping rounded-full opacity-75'></span>
                <span className='relative w-2 h-2 bg-red-500 rounded-full'></span>
              </span>
              <div className='text-xs font-medium text-nowrap ml-3'>
                <p>What's new?</p>
              </div>
            </div>
            <a href='#' className='text-xs text-gray-600 ml-2 truncate'>
              Lorem ipsum dolor sit amet
            </a>
            <svg
              className='w-4 h-4 ml-1'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </div> */}
          <h1 className="mb-6 bg-gradient-to-r from-accent-dark-ui to-accent-ui bg-clip-text py-2 text-5xl font-bold leading-tight text-transparent md:text-4xl lg:text-6xl">
            Shield Your Business from Cyber Threats
          </h1>
          <p className="mb-8 text-lg text-gray-600 ease-in">
            Comprehensive Data Protection and Cybersecurity Solutions
          </p>
          <Button
            as="link"
            to="/contact"
            className="rounded-lg bg-amber-400 px-8 py-4 text-lg font-semibold text-amber-900 transition duration-300"
          >
            Book a Free Consultation
          </Button>
          <div className="mt-16">
            <p className="mb-4 text-sm text-gray-600">
              <span className="font-bold text-gray-950">
                Trusted Partners :
              </span>{' '}
              We collaborate with industry-leading partner
            </p>
            <div className="flex items-center gap-6">
              <div
                className="embla__viewport flex w-full justify-start overflow-hidden"
                ref={emblaRef}
              >
                <div className="embla__container flex w-fit gap-8 px-8">
                  {partners.map((partner) => (
                    <img
                      key={partner.name}
                      draggable="false"
                      src={partner.image}
                      alt={partner.name}
                      className="block aspect-video h-12 object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 h-full w-auto md:pr-16 lg:mt-0">
          <img
            src={heroImage}
            draggable="false"
            alt="Cybersecurity Illustration"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
