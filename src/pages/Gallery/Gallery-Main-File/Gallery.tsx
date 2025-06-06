import React from "react";
import GalleryComponentIntro from "../Gallery-Components/Gallery-Component-Intro";
import GalleryComponentImages from "../Gallery-Components/Gallery-Component-Images";

const Gallery: React.FC = () => {
  return (
    <div>
      <GalleryComponentIntro />
      <GalleryComponentImages />
    </div>
  );
};

export default Gallery;
