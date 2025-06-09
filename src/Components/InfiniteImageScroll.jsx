import React from "react";
import "../Styles/InfiniteImageScroller.css";

import html from "../assets/technicalskils/HTML5_logo_and_wordmark.svg.png";
import css from "../assets/technicalskils/css-removebg-preview.png";
import javascript from "../assets/technicalskils/JS.png";
import reacts from "../assets/technicalskils/reactjs-tutorial-removebg-preview.png";
import Typescript from "../assets/technicalskils/TS.png";
import Materialui from "../assets/technicalskils/Material UI-icon-for-blog.jpg";
import Tailwindcss from "../assets/technicalskils/Tailwindcss.png";
import Bootstrap from "../assets/technicalskils/bootstrap-social-logo.png";
import Reduxtoolskit from "../assets/technicalskils/Reduxtoolkit.png";

const images = [
  html,
  css,
  javascript,
  reacts,
  Typescript,
  Materialui,
  Tailwindcss,
  Bootstrap,
  Reduxtoolskit,
];

export default function InfiniteImageScroller() {
  // Duplicate image set to make it scroll infinitely
  const scrollingImages = [...images, ...images];

  return (
    <div className="bg-[#0d1117] px-3 py-7 overflow-hidden">
      <div className="w-screen ">
        <div className="flex animate-scroll gap-8 sm:gap-12 items-center w-max">
          {scrollingImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain rounded-lg flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
