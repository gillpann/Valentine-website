import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Image, Mail, Music, ArrowLeft} from "lucide-react";
import CountUp from 'react-countup';

const Together = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const startDate = new Date("2022-09-24").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = now - startDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen gradient-valentine flex flex-col items-center justify-center p-4">
      <button
        onClick={() => navigate("/")}
        className="mb-8 flex items-center text-gray-600 hover:text-gray-800 bg-white/80 px-4 py-2 rounded-full transition-all hover:scale-105"
        data-aos="fade-down"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div 
        className="text-center mb-8 md:mb-12 bg-white/30 backdrop-blur-sm p-4 md:p-6 rounded-2xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">
          How Long We've Been Together? ??
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div 
          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <span className="text-4xl font-bold text-red-500 animate-pulse">
            <CountUp end={timeElapsed.days} duration={2} />
          </span>
          <p className="text-gray-600">Days</p>
        </div>
        <div 
          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <span className="text-4xl font-bold text-red-500">
            <CountUp end={timeElapsed.hours} duration={2} />
          </span>
          <p className="text-gray-600">Hours</p>
        </div>
        <div 
          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <span className="text-4xl font-bold text-red-500">
            <CountUp end={timeElapsed.minutes} duration={2} />
          </span>
          <p className="text-gray-600">Minutes</p>
        </div>
        <div 
          className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <span className="text-4xl font-bold text-red-500">
            {timeElapsed.seconds}
          </span>
          <p className="text-gray-600">Seconds</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8">
        <button
          onClick={() => navigate("/gallery")}
          className="flex flex-col items-center space-y-2 group"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <div className="p-3 md:p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg group-hover:bg-pink-50 transition-all hover:scale-110">
            <Image className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
          </div>
          <span className="text-sm md:text-base text-gray-700 font-medium">
            Our Gallery
          </span>
        </button>

        <button
          onClick={() => navigate("/letter")}
          className="flex flex-col items-center space-y-2 group"
          data-aos="fade-up"
          data-aos-delay="1400"
        >
          <div className="p-3 md:p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg group-hover:bg-pink-50 transition-all hover:scale-110">
            <Mail className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
          </div>
          <span className="text-sm md:text-base text-gray-700 font-medium">
            Love Letter
          </span>
        </button>

        <button
          onClick={() => navigate("/music")}
          className="flex flex-col items-center space-y-2 group"
          data-aos="fade-up"
          data-aos-delay="1600"
        >
          <div className="p-3 md:p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg group-hover:bg-pink-50 transition-all hover:scale-110">
            <Music className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
          </div>
          <span className="text-sm md:text-base text-gray-700 font-medium">
            Our Playlist
          </span>
        </button>
      </div>
    </div>
  );
};

export default Together;