import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Heart } from "lucide-react";
import profile from "../assets/images/profile.png"

const Login = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNumpadClick = (num: string) => {
    if (password.length < 6) {
      setPassword((prev) => prev + num);
    }
  };

  const handleSubmit = () => {
    if (password === "240922") {
      Swal.fire({
        title: "Login Berhasil!",
        text: "Selamat datang, sayang ❤️",
        icon: "success",
        confirmButtonText: "Lanjut",
        confirmButtonColor: "#ff6b6b",
        background: "rgba(255, 255, 255, 0.9)",
        backdrop: `
          rgba(255, 192, 203, 0.4)
          url("/hearts.gif")
          left top
          no-repeat
        `,
      }).then(() => {
        navigate("/together");
      });
    } else {
      Swal.fire({
        title: "Password Salah!",
        text: "Coba lagi ya, sayang ❤️",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#ff6b6b",
      });
      setPassword("");
    }
  };

  const handleClear = () => {
    setPassword("");
  };

  return (
    <div className="min-h-screen gradient-animate flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Image container - hidden on mobile (smaller than md breakpoint) */}
        <div className="hidden md:block md:w-1/2">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        {/* Login container - full width on mobile, half width on desktop */}
        <div className="w-full md:w-1/2 p-8">
          <div className="text-center mb-8 animate-pulse">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-4 animate-bounce" />
            <h1 className="text-3xl font-bold text-gray-800 animate-fade-in">
              Happy Valentine's Day
            </h1>
          </div>

          <div className="mb-6">
            <input
              type="password"
              value={password}
              readOnly
              className="w-full text-center text-2xl p-3 border rounded-lg mb-4 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-red-300 transition-all"
              placeholder="Enter Password"
            />
            <p className="text-sm text-gray-500 text-center">
              Hint: Tanggal jadian kita ❤️ (ddmmyy)
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumpadClick(num.toString())}
                className="p-4 text-xl font-bold bg-pink-50 hover:bg-pink-100 rounded-lg transition-all hover:scale-105 active:scale-95"
              >
                {num}
              </button>
            ))}
            <button
              onClick={handleClear}
              className="p-4 text-xl font-bold bg-red-50 hover:bg-red-100 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              ❌
            </button>
            <button
              onClick={() => handleNumpadClick("0")}
              className="p-4 text-xl font-bold bg-pink-50 hover:bg-pink-100 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              0
            </button>
            <button
              onClick={handleSubmit}
              className="p-4 text-xl font-bold bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
