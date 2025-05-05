// import React from 'react';

// const MissionVision = () => {
//   return (
//     <section className="text-center py-16 px-4 md:px-20 bg-gray-100">
//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-bold underline text-purple-900 mb-10">
//         Our Mission <span className="text-red-600">& Vision</span>
//       </h2>

//       {/* Full Width Image */}
//       <div className="w-full overflow-hidden rounded-xl shadow-lg">
//         <img
//           src="/assetes/vigyan/missionandvission.jpeg"
//           alt="Mission and Vision"
//           className="w-full h-auto object-cover"
//         />
//       </div>
//     </section>
//   );
// };

// export default MissionVision;


import React from 'react';
// import './MissionVision.css'; // for custom animation

const MissionVision = () => {
  return (
    <section className="text-center py-16 px-4 md:px-20 bg-gray-100">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold underline text-purple-900 mb-10">
        Our Mission <span className="text-red-600">& Vision</span>
      </h2>

      {/* Animated Image Container */}
      <div className="mx-auto w-full max-w-3xl perspective">
        <div className="rounded-xl overflow-hidden shadow-2xl bg-white transform-style animated-3d hover:scale-105 transition-transform duration-700 ease-in-out">
          <img
            src="/assetes/vigyan/missionandvission.jpeg"
            alt="Mission and Vision"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
