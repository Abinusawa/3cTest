import React from 'react';

interface InfoCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const EventCard: React.FC<InfoCardProps> = ({ image, title, description, link }) => {
  return (
    <div className="relative w-72 h-96 overflow-hidden rounded-xl shadow-lg group cursor-pointer">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full opacity-70"
        />
      </div>

      {/* Title Always Visible */}
      <div className="absolute top-4 left-4 z-10">
        <h3 className="text-xl font-bold text-white drop-shadow-md">{title}</h3>
      </div>

      {/* Slide-up Full Info Panel */}
      <div className="absolute inset-0 bg-white bg-opacity-95 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <a href={link} className="mt-4 inline-block text-blue-600 hover:underline">Learn more</a>
      </div>
    </div>
  );
};

export default EventCard;












































// import React, { useState } from 'react';

// interface InfoCardProps {
//   image: string;
//   title: string;
//   description: string;
//   link: string;
// }

// const EventCard: React.FC<InfoCardProps> = ({ image, title, description, link }) => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <div className="relative w-72 h-96 overflow-hidden rounded-xl shadow-lg group cursor-pointer">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src={image}
//             alt={title}
//             className="object-cover w-full h-full opacity-70"
//           />
//         </div>

//         {/* Title Always Visible */}
//         <div className="absolute top-4 left-4 z-10">
//           <h3 className="text-xl font-bold text-white drop-shadow-md">{title}</h3>
//         </div>

//         {/* Slide-up Full Info */}
//         <div className="absolute inset-0 bg-white bg-opacity-95 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
//           <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
//           <p className="text-sm text-gray-600">{description}</p>
//           <button
//             onClick={() => setShowModal(true)}
//             className="mt-4 inline-block text-blue-600 hover:underline"
//           >
//             Learn more
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
//           <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
//             <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />
//             <p className="text-gray-700">{description}</p>
//             <a href={link} className="mt-4 inline-block text-blue-600 hover:underline">External Link</a>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EventCard;
