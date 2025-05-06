import React, { useState } from "react";
import { createFileRoute } from '@tanstack/react-router';
import EVT1 from '@assets/events/evt1.jpg';
import EVT2 from '@assets/events/evt2.jpg';
import EVT3 from '@assets/events/evt3.jpg';

interface Event {
  id: number;
  image: string;
  title: string;
  description: string;
  organizer: string;
  type: string;
  date: string;
  isoDate: string;
}

const events: Event[] = [
  {
    id: 1,
    image: EVT1,
    title: "Introduction to Data Privacy and Data Protection",
    description: "To provide flexible, inspiring workspaces that foster creativity, collaboration, and professional growth.",
    organizer: "3Consulting Ltd",
    type: "Webinar",
    date: "Fri, 31 January 2025 at 11AM (CAT)",
    isoDate: "2025-01-31T09:00:00Z",
  },
  {
    id: 2,
    image: EVT2,
    title: "Unlocking Compliance: What Zambia Data Privacy Means to You and Your Business",
    description: "To provide flexible, inspiring workspaces that foster creativity, collaboration, and professional growth.",
    organizer: "3Consulting Ltd",
    type: "Webinar",
    date: "Wed, 16 April 2025 at 16:00 - 17:00 (CAT)",
    isoDate: "2025-04-16T14:00:00Z",
  },
  {
    id: 3,
    image: EVT3,
    title: "Role of Employees in Safe guarding data Privacy",
    description: "To provide flexible, inspiring workspaces that foster creativity, collaboration, and professional growth.",
    organizer: "3Consulting Ltd",
    type: "Data Privacy",
    date: "Fri, 28 March 2025 at 10AM GMT+1",
    isoDate: "2025-06-28T09:00:00Z",
  },
];

const sortByDate = (events: Event[], order: "asc" | "desc" = "asc") => {
  return [...events].sort((a, b) =>
    order === "asc"
      ? new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime()
      : new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
  );
};

const Events: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "latest">("all");

  const now = new Date();

  const filteredEvents = (() => {
    if (filter === "upcoming") {
      return sortByDate(
        events.filter((e) => new Date(e.isoDate) >= now),
        "asc"
      );
    }
    if (filter === "latest") {
      return sortByDate(events, "desc");
    }
    return sortByDate(events, "asc");
  })();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Grow Your Network & Skills with Our Events
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`border rounded-full px-4 py-1 font-medium transition ${
            filter === "all"
              ? "bg-orange-500 text-white"
              : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          }`}
        >
          All Events
        </button>
        <button
          onClick={() => setFilter("upcoming")}
          className={`border rounded-full px-4 py-1 font-medium transition ${
            filter === "upcoming"
              ? "bg-orange-500 text-white"
              : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          }`}
        >
          Coming Soon
        </button>
        <button
          onClick={() => setFilter("latest")}
          className={`border rounded-full px-4 py-1 font-medium transition ${
            filter === "latest"
              ? "bg-orange-500 text-white"
              : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          }`}
        >
          Latest Event
        </button>
      </div>

      <div className="space-y-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full md:w-1/3 h-56 object-cover"
            />

            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <span className="inline-block bg-orange-100 text-sm px-3 py-1 rounded-full mb-2 text-orange-600">
                  {event.type}
                </span>
                <h2 className="text-lg md:text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 text-sm mb-3">
                  {event.description}
                </p>
                <div className="text-sm space-y-1">
                  <div>
                    <span className="font-semibold">Organizer: </span>
                    {event.organizer}
                  </div>
                  <div>
                    <span className="font-semibold">Date: </span>
                    {event.date}
                  </div>
                </div>
              </div>

              {/* <div className="mt-4 md:mt-0 flex md:flex-col gap-2 md:items-end">
                <button className="bg-orange-500 text-white w-full md:w-auto px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition">
                  Buy a ticket
                </button>
                <button className="hidden md:block border border-orange-500 text-orange-500 px-4 py-2 rounded-full text-sm hover:bg-orange-500 hover:text-white transition">
                  See Details
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Route = createFileRoute('/resources/events')({
  component: Events,
});

export default Events;
































// // src/pages/CardsPage.tsx
// import React from 'react';
// import EventCard from '@components/pages/resources/events/eventcards';
// import EVT1 from '@assets/events/evt1.jpg';
// import { createFileRoute } from '@tanstack/react-router'; // Assuming you're using TanStack Router

// // Sample data for the upcoming events
// const upcomingEventsData = [
//   {
//     image: 'https://via.placeholder.com/300x400',
//     title: 'Card 1',
//     description: 'This is card 1. Join us for an exciting event!',
//     link: '#',
//   },
//   {
//     image: 'https://via.placeholder.com/300x400',
//     title: 'Card 2',
//     description: 'This is card 2. Don’t miss this special event!',
//     link: '#',
//   },
//   {
//     image: 'https://via.placeholder.com/300x400',
//     title: 'Card 3',
//     description: 'This is card 3. Come and be a part of this event!',
//     link: '#',
//   },
// ];

// // Sample data for the past events
// const pastEventsData = [
//   {
//     image: EVT1 ,
//     title: 'Past Event 1',
//     description: 'This event has already happened, but you can still check it out.',
//     link: '#',
//   },
//   {
//     image: 'https://via.placeholder.com/300x400',
//     title: 'Past Event 2',
//     description: 'This was a great event! Here’s a glimpse of what took place.',
//     link: '#',
//   },
//   {
//     image: 'https://via.placeholder.com/300x400',
//     title: 'Past Event 3',
//     description: 'Check out this past event and what we accomplished.',
//     link: '#',
//   },
// ];

// const Events: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-8">
//       {/* Page Header */}
//       <header className="text-center mb-12">
//         <h1 className="text-4xl font-semibold text-gray-800">Events</h1>
//         <p className="text-xl text-gray-600 mt-2">Stay updated with our events!</p>
//       </header>

//       {/* Upcoming Events Section */}
//       <section className="mb-16">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6">Upcoming Events</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
//           {upcomingEventsData.map((card, index) => (
//             <EventCard key={index} {...card} />
//           ))}
//         </div>
//       </section>

//       {/* Past Events Section */}
//       <section>
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6">Past Events</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
//           {pastEventsData.map((card, index) => (
//             <EventCard key={index} {...card} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// // Define Route for the Events Page
// export const Route = createFileRoute('/resources/events')({
//   component: Events,
// });

// export default Events;
























// src/pages/CardsPage.tsx
// import React from 'react';
// import EventCard from '@components/pages/resources/events/eventcards';
// import { createFileRoute } from '@tanstack/react-router'; // Assuming you're using TanStack Router

// const cardsData = [
//   {
//     image: 'https://via.placeholder.com/300x400',
//     title: 'Card 1',
//     description: 'This is card 1.',
//     link: '#',
//   },
//   {
//     image: 'https://via.placeholder.com/300x400',
//     title: 'Card 2',
//     description: 'This is card 2.',
//     link: '#',
//   },
//   {
//     image: 'https://via.placeholder.com/300x400',
//     title: 'Card 3',
//     description: 'This is card 3.',
//     link: '#',
//   },
// ];

// const Events: React.FC = () => {
//   return (
//     <div className="min-h-screen  p-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
//         {cardsData.map((card, index) => (
//           <EventCard key={index} {...card} />
//         ))}
//       </div>
//     </div>
//   );
// };

// // ✅ Move this below the Events declaration
// export const Route = createFileRoute('/resources/events')({
//   component: Events,
// });

// export default Events;
