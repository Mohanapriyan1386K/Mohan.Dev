import React from "react";
import Particles from "../Components/Animation/Particles";
import BlurText from "../Components/Animation/BlurText";
import images from "../Utility/Images";
import TrueFocus from "../Components/Animation/TrueFocus";
import TiltedCard from "../Components/Animation/TiltedCard";
import WhatIDo from "../Components/Ui/WhatIDo";
import SkillsTech from "../Components/Ui/SkillsTech";
import InfiniteImageScroll from "../Components/InfiniteImageScroll";
import Blog from "./Blog";
import CountUp from "../Components/Animation/CountUp";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  const Navigate = useNavigate();
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  const handlenav = () => {
    Navigate("/contact");
  };

  return (
    <div className="w-full">
      {/* Hero Section with Particles */}
      <div className="relative w-full max-h-screen overflow-hidden mt-0">
        {/* Particle Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="absolute w-full h-full z-0">
            <Particles
              particleColors={["#000000", "#000000"]}
              particleCount={200}
              particleSpread={50}
              speed={0.5}
              particleBaseSize={300}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-10 px-4 sm:px-6 lg:px-16 py-12">
            {/* Tilted Card */}
            <div className=" hidden md:block   w-full sm:w-auto  justify-center">
              <TiltedCard
                backgroundDesign={images.backgroudprofile}
                imageSrc={images.profile}
                altText="Profile Picture"
                captionText="MOHAN"
                containerHeight="500px"
                containerWidth="100%"
                imageHeight="500px"
                imageWidth="350px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
            </div>

            {/* Text Section */}
            <div className="max-w-2xl text-center md:text-left px-2">
              <BlurText
                text="I AM MOHANA PRIYAN"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-[20px] sm:text-2xl font-bold mb-3"
              />

              <TrueFocus
                sentence="FRONT END DEVELOPER"
                manualMode={false}
                blurAmount={5}
                borderColor="red"
                animationDuration={1}
                pauseBetweenAnimations={1}
              />

              <p className="mt-4 text-black text-base sm:text-lg leading-relaxed">
                Hi, I’m Mohana Priyan — a passionate Frontend Developer with a
                knack for crafting clean, responsive, and user-friendly web
                interfaces. I love turning complex problems into simple,
                beautiful, and intuitive designs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
                <button
                  onClick={handlenav}
                  className="bg-red-500 text-white hover:bg-black px-6 py-2 rounded-[10px] cursor-pointer hover:scale-105 transition font-bold w-full sm:w-auto"
                >
                  HIRE ME
                </button>
                <button className="bg-black text-white hover:bg-red-500 px-6 py-2 rounded-[10px] cursor-pointer hover:scale-105 transition font-bold w-full sm:w-auto">
                  DOWNLOAD CV
                </button>
              </div>
            </div>
            {/* count */}
            <div className="bg-black p-9   text-white flex flex-col gap-2  rounded-2xl">
              <div>
                <div>
                  <CountUp
                    from={0}
                    to={1}
                    separator=","
                    direction="up"
                    duration={3}
                    className="count-up-text text-3xl font-bold "
                  />
                  <span className="text-3xl font-bold">+</span>
                </div>

                <p className="font-serif font-bold">Experience</p>
              </div>
              <hr />
              {/* 2 */}
              <div>
                <div>
                  <CountUp
                    from={0}
                    to={10}
                    separator=","
                    direction="up"
                    duration={3}
                    className="count-up-text text-3xl  font-bold"
                  />
                  <span className="text-3xl font-bold">+</span>
                </div>

                <p className="font-serif font-bold">Projects</p>
              </div>
              <hr />
              {/* 3 */}
              <div>
                <div>
                  <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={3}
                    className="count-up-text text-3xl font-bold"
                  />
                  <span className="text-3xl font-bold">%</span>
                </div>

                <p className="font-serif font-bold  ">Client Satisfactions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* What I Do */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <WhatIDo />
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="px-4 sm:px-6 lg:px-20 py-8">
          <SkillsTech />
        </div>
      </motion.div>

      {/* Infinite Image Scroll */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="">
          <InfiniteImageScroll />
        </div>
      </motion.div>

      {/* Blog Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="px-4 sm:px-6 lg:px-20 py-8">
          <Blog />
        </div>
      </motion.div>
    </div>
  );
}

export default About;
