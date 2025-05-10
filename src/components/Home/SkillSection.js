// import React, { useState, useEffect, useRef } from 'react';

// const SkillSection = () => {
//   const [studentProgress, setStudentProgress] = useState(0);
//   const [teacherProgress, setTeacherProgress] = useState(0);
//   const [satisfactionProgress, setSatisfactionProgress] = useState(0);
//   const [designation, setDesignation] = useState('');

//   const formRef = useRef(null);
//   const rightDivRef = useRef(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [isRightDivVisible, setIsRightDivVisible] = useState(false);

//   useEffect(() => {
//     animateProgress(setStudentProgress, 48);
//     animateProgress(setTeacherProgress, 60);
//     animateProgress(setSatisfactionProgress, 97);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsFormVisible(true);
//           setIsRightDivVisible(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (formRef.current) observer.observe(formRef.current);
//     if (rightDivRef.current) observer.observe(rightDivRef.current);

//     return () => {
//       if (formRef.current) observer.unobserve(formRef.current);
//       if (rightDivRef.current) observer.unobserve(rightDivRef.current);
//     };
//   }, []);

//   const animateProgress = (setValue, target) => {
//     let current = 0;
//     const interval = setInterval(() => {
//       if (current >= target) {
//         clearInterval(interval);
//       } else {
//         current++;
//         setValue(current);
//       }
//     }, 120);
//   };

//   return (
//     <div
//       className="w-full bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/assets/vigyan/slider-1.jpg')" }}
//     >
//       <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black/60 gap-10 sm:gap-12">

//         {/* Contact Form */}
//         <div
//           ref={formRef}
//           className={`bg-white/90 p-6 sm:p-8 rounded-2xl shadow-xl w-full sm:w-[90%] md:w-[80%] lg:w-[40%] transition-all ease-in-out ${
//             isFormVisible ? 'animate-slide-in' : ''
//           }`}
//         >
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-3">Contact Us</h2>
//           <p className="text-sm sm:text-base text-gray-600 mb-4 text-center">Feel free to ask any questions.</p>

//           <form className="space-y-4">
//             <input type="text" placeholder="Your Name" className={inputStyle} />
//             <input type="email" placeholder="Email Address" className={inputStyle} />
//             <input type="tel" placeholder="Contact Number" className={inputStyle} />
//             <input type="text" placeholder="City Name" className={inputStyle} />

//             <select
//               className={inputStyle}
//               value={designation}
//               onChange={(e) => setDesignation(e.target.value)}
//             >
//               <option value="">Select Designation</option>
//               <option value="student">Student</option>
//               <option value="teacher">Teacher</option>
//               <option value="admin">Management</option>
//               <option value="principal">Principal</option>
//               <option value="parent">Parent</option>
//               <option value="trainer">Trainer</option>
//               <option value="other">Other</option>
//             </select>

//             <textarea placeholder="Type Message" rows={4} className={inputStyle} />

//             <div className="flex items-start gap-2 text-xs">
//               <input type="checkbox" id="agreement" />
//               <label htmlFor="agreement" className="text-gray-600">
//                 I agree to share my information with Vigyan Pathshala for limited enquiry/subscription/purchase and services only.
//               </label>
//             </div>

//             <button
//               type="submit"
//               className="mt-4 sm:mt-6 px-6 py-2 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition w-full"
//             >
//               Submit →
//             </button>
//           </form>
//         </div>

//         {/* Skills Panel */}
//         <div
//           ref={rightDivRef}
//           className={`w-full sm:w-[90%] md:w-[80%] lg:w-[55%] text-white text-center lg:text-left ${
//             isRightDivVisible ? 'animate-fade-in' : ''
//           }`}
//         >
//           <p className="text-xs sm:text-sm font-medium tracking-wide uppercase text-white mb-3">
//             Our Skills
//           </p>
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white">
//             Explore Your <span className="text-teal-300">Creativity<br />And Talent</span> With Us
//           </h2>
//           <p className="text-sm sm:text-base text-gray-200 mb-10">
//             Founded with a passion for innovation in education, Vigyan Pathshala has worked tirelessly to design programs
//             that align with global trends and the National Education Policy...
//           </p>

//           <div className="space-y-6 sm:space-y-8">
//             <ProgressBar label="Our Students" value={studentProgress} />
//             <ProgressBar label="Our Teachers" value={teacherProgress} />
//             <ProgressBar label="Satisfaction Rate" value={satisfactionProgress} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProgressBar = ({ label, value }) => (
//   <div>
//     <div className="flex justify-between text-xs sm:text-sm font-medium mb-1 sm:mb-2">
//       <span>{label}</span>
//       <span>{value}%</span>
//     </div>
//     <div className="w-full bg-gray-300 rounded-full h-3 sm:h-4">
//       <div
//         className="bg-teal-500 h-3 sm:h-4 rounded-full transition-all duration-500 ease-in-out"
//         style={{ width: `${value}%` }}
//       />
//     </div>
//   </div>
// );

// const inputStyle =
//   'w-full px-4 py-2 rounded-md bg-gray-100 outline-none border border-gray-300 focus:border-gray-500 transition';

// export default SkillSection;


import React, { useState, useEffect, useRef } from 'react';

const SkillSection = () => {
  const [studentProgress, setStudentProgress] = useState(0);
  const [teacherProgress, setTeacherProgress] = useState(0);
  const [satisfactionProgress, setSatisfactionProgress] = useState(0);
  const [designation, setDesignation] = useState('');

  const formRef = useRef(null);
  const rightDivRef = useRef(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isRightDivVisible, setIsRightDivVisible] = useState(false);

  useEffect(() => {
    animateProgress(setStudentProgress, 48);
    animateProgress(setTeacherProgress, 60);
    animateProgress(setSatisfactionProgress, 97);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFormVisible(true);
          setIsRightDivVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    // Store the current value of refs for cleanup
    const currentFormRef = formRef.current;
    const currentRightDivRef = rightDivRef.current;

    if (currentFormRef) observer.observe(currentFormRef);
    if (currentRightDivRef) observer.observe(currentRightDivRef);

    return () => {
      if (currentFormRef) observer.unobserve(currentFormRef);
      if (currentRightDivRef) observer.unobserve(currentRightDivRef);
    };
  }, []);

  const animateProgress = (setValue, target) => {
    let current = 0;
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        setValue(current);
      }
    }, 120);
  };

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/vigyan/slider-1.jpg')" }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black/60 gap-10 sm:gap-12">

        {/* Contact Form */}
        <div
          ref={formRef}
          className={`bg-white/90 p-6 sm:p-8 rounded-2xl shadow-xl w-full sm:w-[90%] md:w-[80%] lg:w-[40%] transition-all ease-in-out ${
            isFormVisible ? 'animate-slide-in' : ''
          }`}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-3">Contact Us</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4 text-center">Feel free to ask any questions.</p>

          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className={inputStyle} />
            <input type="email" placeholder="Email Address" className={inputStyle} />
            <input type="tel" placeholder="Contact Number" className={inputStyle} />
            <input type="text" placeholder="City Name" className={inputStyle} />

            <select
              className={inputStyle}
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option value="">Select Designation</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Management</option>
              <option value="principal">Principal</option>
              <option value="parent">Parent</option>
              <option value="trainer">Trainer</option>
              <option value="other">Other</option>
            </select>

            <textarea placeholder="Type Message" rows={4} className={inputStyle} />

            <div className="flex items-start gap-2 text-xs">
              <input type="checkbox" id="agreement" />
              <label htmlFor="agreement" className="text-gray-600">
                I agree to share my information with Vigyan Pathshala for limited enquiry/subscription/purchase and services only.
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 sm:mt-6 px-6 py-2 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition w-full"
            >
              Submit →
            </button>
          </form>
        </div>

        {/* Skills Panel */}
        <div
          ref={rightDivRef}
          className={`w-full sm:w-[90%] md:w-[80%] lg:w-[55%] text-white text-center lg:text-left ${
            isRightDivVisible ? 'animate-fade-in' : ''
          }`}
        >
          <p className="text-xs sm:text-sm font-medium tracking-wide uppercase text-white mb-3">
            Our Skills
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white">
            Explore Your <span className="text-teal-300">Creativity<br />And Talent</span> With Us
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mb-10">
            Founded with a passion for innovation in education, Vigyan Pathshala has worked tirelessly to design programs
            that align with global trends and the National Education Policy...
          </p>

          <div className="space-y-6 sm:space-y-8">
            <ProgressBar label="Our Students" value={studentProgress} />
            <ProgressBar label="Our Teachers" value={teacherProgress} />
            <ProgressBar label="Satisfaction Rate" value={satisfactionProgress} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ label, value }) => (
  <div>
    <div className="flex justify-between text-xs sm:text-sm font-medium mb-1 sm:mb-2">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full bg-gray-300 rounded-full h-3 sm:h-4">
      <div
        className="bg-teal-500 h-3 sm:h-4 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

const inputStyle =
  'w-full px-4 py-2 rounded-md bg-gray-100 outline-none border border-gray-300 focus:border-gray-500 transition';

export default SkillSection;
