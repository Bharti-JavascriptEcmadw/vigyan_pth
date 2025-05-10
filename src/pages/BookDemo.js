// import React from "react";

// const BookDemo = () => {
//   return (
//     <section className="bg-black text-white min-h-screen">
//       <div
//   className="w-full relative "
//   style={{
//     backgroundImage: "url('/assets/vigyan/slider-3.jpg')",
//     backgroundSize: "cover",
//     backgroundPosition: "center", 
//     backgroundRepeat: "no-repeat",
//   }}
// >
// <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//   <div className="w-full h-full bg-black/ flex items-center justify-center py-40 px-4">
//     <h1 className="text-4xl md:text-5xl font-bold text-white z-5 sticky text-center animate-rotateYLeft origin-center transition-all duration-500 ease-in-out">
//       Book Demo
//     </h1>
//   </div>
// </div>



//       {/* Form section */}
//       <div className="max-w-ful mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 bg-gradient-to-br from-blue-100 via-white to-purple-100  shadow-md">
//       {/* Left: image */}
//         <div className="w-full lg:w-1/2">
//           <img
//             src="/assets/contact/bookdemo_registration.jpg" // update image path as needed
//             alt="Demo Visual"
//             className="rounded-lg shadow-lg w-full h-full object-cover max-h-[500px] "
//           />
//         </div>

//         {/* Right: Form */}
//         <div className="w-full lg:w-1/2 bg-gray-900 p-6 rounded-lg shadow-lg">
//           <form className="space-y-5">
//             {/* Row 1 */}
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full">
//                 <label className="block text-sm mb-1">First Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter first name"
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//               <div className="w-full">
//                 <label className="block text-sm mb-1">Last Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter last name"
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//             </div>

//             {/* Row 2 */}
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full">
//                 <label className="block text-sm mb-1">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//               <div className="w-full">
//                 <label className="block text-sm mb-1">Phone Number</label>
//                 <input
//                   type="text"
//                   placeholder="Enter your phone number"
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//             </div>

//             {/* Row 3 */}
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full">
//                 <label className="block text-sm mb-1">Designation</label>
//                 <select className="w-full bg-white border border-gray-700 p-3 rounded text-black">
//                   <option value="">Select designation</option>
//                   <option value="student">Student</option>
//                   <option value="teacher">Teacher</option>
//                   <option value="parent">Parent</option>
//                   <option value="principal">Principal</option>
//                 </select>
//               </div>
//               <div className="w-full">
//                 <label className="block text-sm mb-1">City Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter your city"
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//             </div>

//             {/* Row 4 */}
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full">
//                 <label className="block text-sm mb-1">School Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter your school name"
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//               <div className="w-full">
//                 <label className="block text-sm mb-1">Preferred Date</label>
//                 <input
//                   type="date"
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//             </div>

//             {/* Row 5 */}
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full">
//                 <label className="block text-sm mb-1">Preferred Time</label>
//                 <select className="w-full bg-white border border-gray-700 p-3 rounded text-black">
//                   <option value="">Select time</option>
//                   <option value="morning">Morning (9AM - 12PM)</option>
//                   <option value="afternoon">Afternoon (12PM - 3PM)</option>
//                   <option value="evening">Evening (3PM - 6PM)</option>
//                 </select>
//               </div>
//               <div className="w-full">
//                 <label className="block text-sm mb-1">Your Requirement</label>
//                 <textarea
//                   rows="2"
//                   placeholder="Describe your requirement..."
//                   className="w-full bg-white border border-gray-700 p-3 rounded text-black"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-cyan-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-cyan-300 transition-all"
//             >
//               Book Demo
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookDemo;


import React from "react";

const BookDemo = () => {
  return (
    <section className="bg-black text-white min-h-screen">
      <div
        className="w-full relative "
        style={{
          backgroundImage: "url('/assets/vigyan/slider-3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="w-full h-full bg-black/ flex items-center justify-center py-40 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white z-5 sticky text-center animate-rotateYLeft origin-center transition-all duration-500 ease-in-out">
            Book Demo
          </h1>
        </div>
      </div>

      {/* Form section */}
      <div className="max-w-ful mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 bg-gradient-to-br from-blue-100 via-white to-purple-100  shadow-md">
        {/* Left: image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/assets/contact/bookdemo_registration.jpg" // update image path as needed
            alt="Demo Visual"
            loading="lazy"  // lazy loading added here
            className="rounded-lg shadow-lg w-full h-full object-cover max-h-[500px]"
          />
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-1/2 bg-gray-900 p-6 rounded-lg shadow-lg">
          <form className="space-y-5">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full bg-white border border-gray-700 p-3 rounded text-black"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full bg-white border border-gray-700 p-3 rounded text-black"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white border border-gray-700 p-3 rounded text-black"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full bg-white border border-gray-700 p-3 rounded text-black"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm mb-1">Designation</label>
                <select className="w-full bg-white border border-gray-700 p-3 rounded text-black">
                  <option value="">Select designation</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="parent">Parent</option>
                  <option value="principal">Principal</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">City Name</label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="w-full bg-white border border-gray-700 p-3 rounded text-black"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm mb-1">School Name</label>
                <input
                  type="text"
                  placeholder="Enter your school name"
                  className="w-full bg-white border border-gray-700 p-3 rounded text-black"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">Preferred Date</label>
                <input
                  type="date"
                  className="w-full bg-white border border-gray-700 p-3 rounded text-black"
                />
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm mb-1">Preferred Time</label>
                <select className="w-full bg-white border border-gray-700 p-3 rounded text-black">
                  <option value="">Select time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 3PM)</option>
                  <option value="evening">Evening (3PM - 6PM)</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">Your Requirement</label>
                <textarea
                  rows="2"
                  placeholder="Describe your requirement..."
                  className="w-full bg-white border border-gray-700 p-3 rounded text-black"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-cyan-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-cyan-300 transition-all"
            >
              Book Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
