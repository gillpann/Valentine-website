import { useState, useRef } from 'react';
import { ArrowLeft, Play, Pause } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Music = () => {
  const navigate = useNavigate();
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  const songs = [
    {
      title: "Last Night On Earth",
      artist: "Green Day",
      cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
      url: "URL_TO_YOUR_SONG"
    },
    {
      title: "Sempurna",
      artist: "Andra And The Backbone",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      url: "URL_TO_YOUR_SONG"
    }
  ];

  const togglePlay = (index: number) => {
    if (currentSong !== index) {
      audioRef.current.src = songs[index].url;
      setCurrentSong(index);
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 p-4">
      <button
        onClick={() => navigate('/together')}
        className="mb-8 flex items-center text-gray-600 hover:text-gray-800"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Favorite Songs ❤️
        </h1>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {songs.map((song, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex items-center p-4"
          >
            <img
              src={song.cover}
              alt={song.title}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold text-lg">{song.title}</h3>
              <p className="text-gray-600">{song.artist}</p>
            </div>
            <button
              onClick={() => togglePlay(index)}
              className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              {isPlaying && currentSong === index ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;