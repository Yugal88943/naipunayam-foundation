// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop: React.FC = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Prevent scroll on hash-based anchors or empty pathname changes
//     if (!pathname || pathname.includes("#")) return;

//     // Use requestAnimationFrame for smoother behavior, especially on iOS
//     requestAnimationFrame(() => {
//       try {
//         window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//       } catch {
//         // fallback for unsupported browsers
//         window.scrollTo(0, 0);
//       }
//     });
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname || pathname.includes("#")) return;

    const handle = setTimeout(() => {
      // Only scroll if user is significantly down the page
      if (window.scrollY > 120) {
        // Use instant scroll on very short pages
        const isShortPage = document.body.scrollHeight < window.innerHeight * 2;
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: isShortPage ? "auto" : "smooth",
        });
      }
    }, 50); // slight delay for layout stability

    return () => clearTimeout(handle);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
