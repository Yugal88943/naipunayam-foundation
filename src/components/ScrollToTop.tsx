import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Prevent scroll on hash-based anchors or empty pathname changes
    if (!pathname || pathname.includes("#")) return;

    // Use requestAnimationFrame for smoother behavior, especially on iOS
    requestAnimationFrame(() => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch {
        // fallback for unsupported browsers
        window.scrollTo(0, 0);
      }
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
