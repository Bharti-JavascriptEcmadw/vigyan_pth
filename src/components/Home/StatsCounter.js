import React, { useEffect, useRef, useState } from "react";

const StatsCounter = () => {
  const stats = [
    { label: "Projects Built", count: 120 },
    { label: "Students Trained", count: 32250 },
    { label: "Competitions Won", count: 18 },
  ];

  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const duration = 2000;
      let startTime;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.ceil(stat.count * progress);
        
        // Avoid updating state too frequently
        if (counts[index] !== currentCount) {
          setCounts((prevCounts) => {
            const updated = [...prevCounts];
            updated[index] = currentCount;
            return updated;
          });
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCounts((prevCounts) => {
            const updated = [...prevCounts];
            updated[index] = stat.count;
            return updated;
          });
        }
      };

      requestAnimationFrame(step);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 px-4 sm:px-6 md:px-8 bg-gray-900 my-8 mx-auto max-w-5xl rounded-xl shadow-md"
    >
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center w-full sm:w-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-teal-500">{counts[idx]}+</h3>
            <p className="text-base text-gray-300 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
