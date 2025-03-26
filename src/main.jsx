import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AutonPage from "./pages/AutonPage";
import ProcessorAutonPage from "./pages/AutonPages/ProcessorAutonPage";
import NonProcessorAutonPage from "./pages/AutonPages/NonProcessorAutonPage";
import CenterAutonPage from "./pages/AutonPages/CenterAutonPage";
import VideoPage from "./pages/VideoPage";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/auton" element={<AutonPage />} />
      <Route path="/auton/processor" element={<ProcessorAutonPage />} />
      <Route path="/auton/nonprocessor" element={<NonProcessorAutonPage />} />
      <Route path="/auton/center" element={<CenterAutonPage />} />
      <Route path="/video" element={<VideoPage />} />

    </Routes>
  </BrowserRouter>
);
