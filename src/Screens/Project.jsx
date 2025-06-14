// components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import clincbuy from "../assets/Projects/clinibuy.png"
import Tickpick from "../assets/Projects/Tickpick.png"
import Airlinens from "../assets/Projects/Airlines.png"
import Agroly from  "../assets/Projects/Agroly.png"
import { Helmet } from "react-helmet";


const projects = [
  {
    title: "CLINIBUY",
    description: "Clinibuy app with product listings, cart, and payment.",
    image:clincbuy,
    previewLink: "https://medical-green-xi.vercel.app/#",
    githubLink: "https://github.com/Mohanapriyan6559/Medical"
  },
  {
    title: "Chatbot Assistant",
    description: "AI chatbot using OpenAI API with speech-to-text and voice support.",
    image: Tickpick,
    previewLink: "https://finaltickapi-2pnysrrx2mapxmgmppenkh.streamlit.app/",
    githubLink: "https://github.com/Mohanapriyan6559/finaltickapi"
  },
  {
    title: "Air Lines",
    description: "Flight Booking App Desgin Like using Html and css.",
    image: Airlinens,
    previewLink: "https://airlines-phi.vercel.app/index.html",
    githubLink: "https://github.com/Mohanapriyan6559/Airlinecloneproject"
  },
  {
    title: "Former",
    description: "Formers App.",
    image: Agroly,
    previewLink: "https://agroly.vercel.app/index.html",
    githubLink: "https://github.com/Mohanapriyan6559/Task"
  },
  // Add more projects here
];

const Project = () => {
  return (
    <>
    <Helmet>
        <title>Project|KS MohanaDev-Frontenddeveloper</title>
        <meta
          name="description"
          content="I’m Mohana Priyan, a passionate frontend developer creating responsive and interactive web applications using React, Tailwind CSS, TypeScript, and more."
        />
        <meta
          name="keywords"
          content="Mohana Priyan, Frontend Developer, React.js, Portfolio, Web Developer, JavaScript, Tailwind CSS, TypeScript"
        />
        <meta name="author" content="Mohana Priyan" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Mohana Priyan - About Me" />
        <meta
          property="og:description"
          content="Learn more about Mohana Priyan – a skilled frontend developer with a passion for UI/UX and modern web technologies."
        />
      </Helmet>

    <section className="py-16 px-6 text-black" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#1e293b] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-3">
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-700 transition"
                >
                  🔗 Preview
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 px-4 py-2 rounded text-sm hover:bg-gray-700 transition"
                >
                  💻 Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
        </>
  );
};

export default Project;
