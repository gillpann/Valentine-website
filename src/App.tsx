import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Together from "./pages/Together";
import Gallery from "./pages/Gallery";
import Letter from "./pages/Letter";
import Music from "./pages/Music";

const App = () => {
  return (
    <div className="gradient-animate">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/together" element={<Together />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
