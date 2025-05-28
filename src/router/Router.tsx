import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Program from "../pages/program";
import CGV from "../components/CGV";
import MentionsLegales from "../components/MentionsLegales";
import PolitiqueConfidentialite from "../components/PolitiqueConfidentialite";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programme" element={<Program />} />
      <Route path="/cgv" element={<CGV />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route
        path="/politique-de-confidentialite"
        element={<PolitiqueConfidentialite />}
      />
    </Routes>
  );
}
