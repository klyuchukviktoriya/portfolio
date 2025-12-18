import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import WorksPage from "./pages/WorksPage";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
