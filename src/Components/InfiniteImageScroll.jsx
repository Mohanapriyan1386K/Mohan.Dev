import React from "react";
import "../Styles/InfiniteImageScroller.css";

import html from "../assets/technicalskils/HTML5_logo_and_wordmark.svg.png"
import css from "../assets/technicalskils/css-removebg-preview.png"
import javascript from "../assets/technicalskils/JS.png"
import reacts from "../assets/technicalskils/reactjs-tutorial-removebg-preview.png"
import Typescript from "../assets/technicalskils/TS.png"
import Materialui from "../assets/technicalskils/Material UI-icon-for-blog.jpg"
import Tailwindcss from "../assets/technicalskils/Tailwindcss.png"
import Bootstrap from "../assets/technicalskils/bootstrap-social-logo.png"
import Reduxtoolskit from "../assets/technicalskils/Reduxtoolkit.png"

const images = [
   html,
   css,
   javascript,
   reacts,
   Typescript,
   Materialui,
   Tailwindcss,
   Bootstrap,
   Reduxtoolskit
];

export default function InfiniteImageScroller() {
  return (
    <div className="overflow-hidden w-full  bg-[#0d1117] py-4   ">

      <div className="flex justify-center  p-20 items-center animate-scroll w-[280%]   ">
        {/* First image set */}
        <div className="flex space-x-50 w-1/2">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="w-48 h-32 object-contain rounded-lg"
            />
          ))}
        </div>
        {/* Duplicate image set for seamless loop */}
        <div className="flex space-x-4 w-1/2">
          {images.map((src, index) => (
            <img
              key={`copy-${index}`}
              src={src}
              alt={`Copy Slide ${index}`}
              className="w-48 h-32 object-contain rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
