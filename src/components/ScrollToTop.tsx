import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top, left: 0 whenever the path changes
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  }, [pathname]);

  return null;
};

export default ScrollToTop;
