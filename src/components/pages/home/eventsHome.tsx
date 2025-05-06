import React from 'react';
import EventCard from '@components/pages/resources/events/eventcards';
import EVT1 from '@assets/events/evt1.jpg';
import { createFileRoute } from '@tanstack/react-router';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const upcomingEventsData = [
  {
    image: 'https://via.placeholder.com/300x400',
    title: 'Card 1',
    description: 'This is card 1. Join us for an exciting event!',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/300x400',
    title: 'Card 2',
    description: 'This is card 2. Don’t miss this special event!',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/300x400',
    title: 'Card 3',
    description: 'This is card 3. Come and be a part of this event!',
    link: '#',
  },
];

const pastEventsData = [
  {
    image: EVT1,
    title: 'Past Event 1',
    description: 'This event has already happened, but you can still check it out.',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/300x400',
    title: 'Past Event 2',
    description: 'This was a great event! Here’s a glimpse of what took place.',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/300x400',
    title: 'Past Event 3',
    description: 'Check out this past event and what we accomplished.',
    link: '#',
  },
];

const EventsHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-800">Events</h1>
        <p className="text-xl text-gray-600 mt-2">Stay updated with our events!</p>
      </header>

      {/* Upcoming Events Carousel */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Upcoming Events</h2>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1} // Default for mobile
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, // Show 3 on desktop
          }}
          pagination={{ clickable: true }}
          navigation
        >
        
          {upcomingEventsData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <EventCard {...card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Past Events Carousel */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Past Events</h2>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1} // Default for mobile
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, // Show 3 on desktop
          }}
          pagination={{ clickable: true }}
          navigation
        >
          {pastEventsData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <EventCard {...card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export const Route = createFileRoute('/resources/events')({
  component: EventsHome,
});

export default EventsHome;
