import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// photos
import photoss from "../assets/images/gallery/photoss.jpeg";
import batik from "../assets/images/gallery/batik.jpeg";
import almet from "../assets/images/gallery/almet.jpeg";
import photostudio from "../assets/images/gallery/photostudio.jpeg";
import yearbook from "../assets/images/gallery/yearbook.jpeg";
import graduate from "../assets/images/gallery/graduate.jpeg";
import boyfriend from "../assets/images/gallery/boyfriend.jpeg";
import zoodate from "../assets/images/gallery/zoodate.jpeg";

const Gallery = () => {
  const navigate = useNavigate();

  const photos = [
    {
      url: photoss,
      caption: "Photo Studio",
    },
    {
      url: batik,
      caption: "Batik Day",
    },
    {
      url: almet,
      caption: "With Almamater ",
    },
    {
      url: photostudio,
      caption: "Photo Studio",
    },
    {
      url: yearbook,
      caption: "YearBook ",
    },
    {
      url: graduate,
      caption: "Our Graduations ",
    },
    {
      url: boyfriend,
      caption: "Your Boyfriend -_- ",
    },
    {
      url:zoodate,
      caption: "Zoo Date at Ragunan ",
    },
    
  ];

  return (
    <div className="min-h-screen gradient-animate p-4">
      <button
        onClick={() => navigate("/together")}
        className="mb-8 flex items-center text-gray-600 hover:text-gray-800 bg-white/80 px-4 py-2 rounded-full transition-all hover:scale-105"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
          Our Beautiful Moments ❤️
        </h1>
      </div>

      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        className="w-full max-w-3xl mx-auto"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index} className="w-full max-w-lg">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105">
              <img
                src={photo.url}
                alt={`Memory ${index + 1}`}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-gray-800 text-lg">{photo.caption}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;