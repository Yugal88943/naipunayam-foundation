import React, { useState } from "react";
import { createPortal } from "react-dom";
import { galleryData } from "./galleryData";

const getGridCols = () => {
  if (window.innerWidth >= 1200) return 4;
  if (window.innerWidth >= 900) return 3;
  if (window.innerWidth >= 600) return 2;
  return 1;
};

const GalleryComponentImages: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);
  const [cols, setCols] = useState(getGridCols());

  React.useEffect(() => {
    const onResize = () => setCols(getGridCols());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* <section className="w-full px-4 py-8 max-w-6xl mx-auto"> */}
      {/* <section className="w-full px-4 py-8 max-w-6xl mx-auto bg-gradient-to-br from-white to-gray-50"> */}
      <div className="w-full bg-gradient-to-br from-white to-gray-50">
  <section className="px-4 py-8 max-w-6xl mx-auto">

        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          }}
        >
          {galleryData.map((img, idx) => (
            <div
              key={img.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition"
              onClick={() => setSelectedImg(idx)}
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
                loading="lazy"
                style={{ borderRadius: "1.25rem" }}
              />
              <div className="absolute top-4 left-4 bg-white/80 text-gray-800 px-4 py-1 rounded-full shadow-md font-semibold text-sm backdrop-blur-sm group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-blue-400 group-hover:text-white transition">
                {img.label}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3 opacity-0 group-hover:opacity-100 transition">
                <div className="font-bold">{img.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SVG Divider: Always below everything */}
      <div
        className="w-full overflow-hidden leading-none relative -mb-1 z-0"
        style={{ lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-40 md:h-52"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" x2="1440" y1="0" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ede9fe" />
              <stop offset="100%" stopColor="#a7f3d0" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="
              M0,120
              Q360,60 720,130
              T1440,120
              L1440,180
              L0,180
              Z
            "
          />
        </svg>
      </div>
      </div>

      {/* Modal in Portal, always on top */}
      {selectedImg !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex justify-center items-start pt-[90px] md:pt-[110px] overflow-y-auto"
            style={{ minHeight: "100vh" }}
            onClick={() => setSelectedImg(null)}
          >
            <div
              className="max-w-3xl w-full mx-2 p-4 bg-white rounded-2xl shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={galleryData[selectedImg].image}
                alt={galleryData[selectedImg].title}
                className="w-full max-h-[70vh] object-contain mx-auto rounded-xl"
              />
              <div className="flex items-center gap-2 mt-4">
                <span className="bg-gradient-to-r from-pink-400 to-blue-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {galleryData[selectedImg].label}
                </span>
                <h2 className="text-lg font-bold ml-2">{galleryData[selectedImg].title}</h2>
              </div>
              <p className="text-gray-600 mt-2">{galleryData[selectedImg].description}</p>
              <button
                className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-red-500"
                onClick={() => setSelectedImg(null)}
              >
                &times;
              </button>
            </div>
          </div>,
          document.body
        )}
        
    </>
    
  );
};

export default GalleryComponentImages;
