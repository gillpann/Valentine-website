import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import * as AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
