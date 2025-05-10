const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Shialika Sharma",
      message: "Working in the lab helped me build my first robot!",
      photo: "/assets/Extra/5.jpeg",
    },
    {
      name: "Shubhanshi Verma",
      message: "The mentorship and tools are amazing.",
      photo: "/assets/Extra/25.jpg",
    },
  ];

  return (
    <section className="py-12 bg-white px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Student Testimonials</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {testimonials.map((t, idx) => (
<div key={idx} className="p-6 rounded-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white shadow-lg
border-t-4 border-solid border-gray-900">
            <img
              src={t.photo}
              alt={`${t.name}'s testimonial`}
              className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
            />
            <p className="italic">"{t.message}"</p>
            <p className="font-semibold mt-2">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
