import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const letterContent = `Dear Nida,

Dalam kesempatan istimewa ini, aku ingin mengungkapkan betapa bersyukurnya aku memilikimu dalam hidupku.

Kehadiranmu membawa warna baru dalam setiap hariku. Caramu tersenyum, tawamu yang renyah, dan bahkan diammu yang penuh arti, semuanya menjadi bagian berharga dalam perjalanan kita bersama.

Aku bersyukur bisa mengenalmu, memahami setiap sisi dirimu, dan tumbuh bersamamu. Setiap hari bersamamu adalah pembelajaran baru tentang arti kesabaran, pengertian, dan cinta yang tulus.

Ke depannya, aku berharap bisa:
- Menjadi pendengar setia untuk setiap ceritamu
- Menjadi sandaran saat kamu lelah
- Mendukung setiap langkah dan mimpimu
- Memberikan kebahagiaan dalam kesederhanaan
- Membangun masa depan yang indah bersamamu

Terima kasih telah menjadi bagian terindah dalam hidupku.

With love,
Gilvan`;

  return (
    <div className="min-h-screen gradient-animate p-4">
      <button
        onClick={() => navigate("/together")}
        className="mb-8 flex items-center text-gray-600 hover:text-gray-800 bg-white/80 px-4 py-2 rounded-full transition-all hover:scale-105"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800">With Love, For You ❤️</h1>
        </div>

        {!isOpen ? (
          <div className="text-center">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:scale-105"
            >
              Open
            </button>
          </div>
        ) : (
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg transform transition-all animate-fade-in">
            <TypeAnimation
              sequence={[letterContent]}
              speed={50}
              style={{
                display: "block",
                whiteSpace: "pre-wrap",
                fontFamily: "serif",
                fontSize: "1.1rem",
                lineHeight: "1.8",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Letter;
