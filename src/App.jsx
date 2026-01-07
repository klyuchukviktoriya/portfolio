import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import WorksPage from "./pages/WorksPage";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Footer from "./components/Footer/Footer";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
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
            path="/works"
            element={
              <PageWrapper>
                <WorksPage />
              </PageWrapper>
            }
          ></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
