import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import ProjectsPage from "./pages/ProjectsPage";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <main>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <HomePage />
                </PageWrapper>
              }
            ></Route>
            <Route
              path="/projects"
              element={
                <PageWrapper>
                  <ProjectsPage />
                </PageWrapper>
              }
            ></Route>
          </Routes>
        </main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
