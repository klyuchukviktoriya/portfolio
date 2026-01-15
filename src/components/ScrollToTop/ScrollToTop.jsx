import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let rafId = 0;
      let attempts = 0;
      const maxAttempts = 60;

      const scrollToHash = () => {
        const el = document.querySelector(location.hash);

        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        attempts += 1;
        if (attempts < maxAttempts) {
          rafId = requestAnimationFrame(scrollToHash);
        }
      };

      rafId = requestAnimationFrame(scrollToHash);

      return () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
      };
    }

    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}
