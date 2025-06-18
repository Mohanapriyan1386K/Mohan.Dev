// components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import clincbuy from "../assets/Projects/clinibuy.png";
import Tickpick from "../assets/Projects/Tickpick.png";
import Airlinens from "../assets/Projects/Airlines.png";
import Ecom from "../assets/Projects/Ecom.png"
import Agroly from "../assets/Projects/Agroly.png";
import { Helmet } from "react-helmet";
const projects = [
  {
   title:"Ecommerce",
   description:"Using react + typeScript using creating the this project Fake Api Using Data rendering the data  fetch and also using dynamic routing RestApi using Creating Curd operation",
   image:Ecom,
   previewLink:"https://ecom-coral-mu.vercel.app/",
   githubLink:"https://github.com/Mohanapriyan1386K/Ecom"
  },
  {
    title: "CLINIBUY",
    description: "Clinibuy app with product listings, cart, and payment.",
    image: clincbuy,
    previewLink: "https://medical-green-xi.vercel.app/#",
    githubLink: "https://github.com/Mohanapriyan6559/Medical",
  },
  {
    title: "Chatbot Assistant",
    description:
      "AI chatbot using OpenAI API with speech-to-text and voice support.",
    image: Tickpick,
    previewLink: "https://finaltickapi-2pnysrrx2mapxmgmppenkh.streamlit.app/",
    githubLink: "https://github.com/Mohanapriyan6559/finaltickapi",
  },
  {
    title: "Air Lines",
    description: "Flight Booking App Desgin Like using Html and css.",
    image: Airlinens,
    previewLink: "https://airlines-phi.vercel.app/index.html",
    githubLink: "https://github.com/Mohanapriyan6559/Airlinecloneproject",
  },
  {
    title: "Former",
    description: "Formers App.",
    image: Agroly,
    previewLink: "https://agroly.vercel.app/index.html",
    githubLink: "https://github.com/Mohanapriyan6559/Task",
  },
  // Add more projects here
];

const Project = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Mohana Priyan - React & Web Development</title>
        <meta
          name="description"
          content="Explore projects by Mohana Priyan built using React.js, Tailwind CSS, TypeScript, and JavaScript. Real-world responsive web applications and designs."
        />
        <meta
          name="keywords"
          content="Mohana Priyan Projects, React Projects, Web Developer Projects, Frontend Development, Tailwind CSS, JavaScript Portfolio, TypeScript Projects,Mohanapriyan frontend developer"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="py-16 px-6 text-black" id="projects">
        <h1 className="text-3xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#42464d] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 p-5 "
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
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
                    className="bg-white px-4 py-2 rounded text-sm  transition"
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
