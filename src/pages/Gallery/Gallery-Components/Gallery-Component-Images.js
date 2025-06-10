import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { galleryData } from "./galleryData";
const getGridCols = () => {
    if (window.innerWidth >= 1200)
        return 4;
    if (window.innerWidth >= 900)
        return 3;
    if (window.innerWidth >= 600)
        return 2;
    return 1;
};
const GalleryComponentImages = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [cols, setCols] = useState(getGridCols());
    React.useEffect(() => {
        const onResize = () => setCols(getGridCols());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "w-full bg-gradient-to-br from-white to-gray-50", children: [_jsx("section", { className: "px-4 py-8 max-w-6xl mx-auto", children: _jsx("div", { className: "grid gap-8", style: {
                                gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                            }, children: galleryData.map((img, idx) => (_jsxs("div", { className: "relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition", onClick: () => setSelectedImg(idx), children: [_jsx("img", { src: img.image, alt: img.title, className: "w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90", loading: "lazy", style: { borderRadius: "1.25rem" } }), _jsx("div", { className: "absolute top-4 left-4 bg-white/80 text-gray-800 px-4 py-1 rounded-full shadow-md font-semibold text-sm backdrop-blur-sm group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-blue-400 group-hover:text-white transition", children: img.label }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3 opacity-0 group-hover:opacity-100 transition", children: _jsx("div", { className: "font-bold", children: img.title }) })] }, img.id))) }) }), _jsx("div", { className: "w-full overflow-hidden leading-none relative -mb-1 z-0", style: { lineHeight: 0 }, children: _jsxs("svg", { viewBox: "0 0 1440 180", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "w-full h-40 md:h-52", preserveAspectRatio: "none", children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "waveGradient", x1: "0", x2: "1440", y1: "0", y2: "180", gradientUnits: "userSpaceOnUse", children: [_jsx("stop", { offset: "0%", stopColor: "#ede9fe" }), _jsx("stop", { offset: "100%", stopColor: "#a7f3d0" })] }) }), _jsx("path", { fill: "url(#waveGradient)", d: "\n              M0,120\n              Q360,60 720,130\n              T1440,120\n              L1440,180\n              L0,180\n              Z\n            " })] }) })] }), selectedImg !== null &&
                createPortal(_jsx("div", { className: "fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex justify-center items-start pt-[90px] md:pt-[110px] overflow-y-auto", style: { minHeight: "100vh" }, onClick: () => setSelectedImg(null), children: _jsxs("div", { className: "max-w-3xl w-full mx-2 p-4 bg-white rounded-2xl shadow-2xl relative", onClick: e => e.stopPropagation(), children: [_jsx("img", { src: galleryData[selectedImg].image, alt: galleryData[selectedImg].title, className: "w-full max-h-[70vh] object-contain mx-auto rounded-xl" }), _jsxs("div", { className: "flex items-center gap-2 mt-4", children: [_jsx("span", { className: "bg-gradient-to-r from-pink-400 to-blue-400 text-white px-4 py-1 rounded-full text-sm font-semibold", children: galleryData[selectedImg].label }), _jsx("h2", { className: "text-lg font-bold ml-2", children: galleryData[selectedImg].title })] }), _jsx("p", { className: "text-gray-600 mt-2", children: galleryData[selectedImg].description }), _jsx("button", { className: "absolute top-2 right-4 text-2xl text-gray-600 hover:text-red-500", onClick: () => setSelectedImg(null), children: "\u00D7" })] }) }), document.body)] }));
};
export default GalleryComponentImages;
