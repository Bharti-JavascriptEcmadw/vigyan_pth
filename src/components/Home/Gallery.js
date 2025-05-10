

import React from "react";

const images = [
  "/assets/Gallery/schoolp1.jpeg",
  "/assets/Gallery/schoolp2.jpeg",
  "/assets/Gallery/3.jpg",
  "/assets/Gallery/4.jpg",
  "/assets/Gallery/5.jpg",
  "/assets/video_gallery/1.jpg",
  "/assets/video_gallery/2.jpg",
  "/assets/video_gallery/3.jpg",
    "/assets/video_gallery/4.jpg",
        "/assets/Extra/1.jpeg",
            "/assets/Extra/2.jpeg",
            "/assets/Extra/3.jpeg",
        // "/assets/Extra/4.jpeg",
        "/assets/Extra/5.jpeg",
                "/assets/Extra/5.jpeg",

                        "/assets/Extra/6.jpeg",

                                "/assets/Extra/8.jpeg",

                                        "/assets/Extra/7.jpeg",




                "/assets/video_gallery/6.jpg",



      "/assets/Gallery/6.jpg",
// "/assets/video_gallery/8.jpg",

   

];

const Gallery = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">

      <div className="carousel-wrapper overflow-hidden relative">
        <div className="carousel-track flex space-x-6 ">
          {[...images, ...images].map((image, index) => (
            <div key={index} className="carousel-card w-64 p-4 flex-shrink-0">
                <div className="w-64 h-64 rounded-xl overflow-hidden shadow mb-4">
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
