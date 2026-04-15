// components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import Chatapp from "../assets/Projects/chat.png";
import Tickpick from "../assets/Projects/Tickpick.png";
import Ecom from "../assets/Projects/Ecom.png";
import Agroly from "../assets/Projects/Agroly.png";
import { Helmet } from "react-helmet";
import explore from "../assets/Projects/ExploreCare.png";
import Job from "../assets/Projects/Job.png";

const projects = [
  {
    title: "Health Care",
    description:
      "Accessibility-focused healthcare web app designed in Figma and built with React + Tailwind CSS for smooth patient navigation.",
    image: explore,
    previewLink: "https://www.explorecarepricing.com/",
    tech: ["React", "Tailwind", "Figma"],
  },
  {
    title: "Job Portal",
    description:
      "Role-based full-stack job portal with admin and user dashboards, job listings, and REST API integration.",
    image: Job,
    previewLink: "https://esayjobs.vercel.app/",
    tech: ["React", "MUI", "REST API"],
  },
  {
    title: "Chat App",
    description:
      "Real-time chat application built with React and JavaScript, inspired by WhatsApp-style messaging.",
    image: Chatapp,
    previewLink: "https://indian-chatsapp.vercel.app/",
    githubLink: "https://github.com/Mohanapriyan1386K/Ecom",
    tech: ["React", "JavaScript", "Realtime"],
  },
  {
    title: "Ecommerce",
    description:
      "TypeScript e-commerce app with fake API integration, dynamic routing, and full CRUD operations.",
    image: Ecom,
    previewLink: "https://ecom-coral-mu.vercel.app/",
    githubLink: "https://github.com/Mohanapriyan1386K/Ecom",
    tech: ["React", "TypeScript", "CRUD"],
  },
  {
    title: "Chatbot Assistant",
    description:
      "AI chatbot using OpenAI API with speech-to-text and voice support.",
    image: Tickpick,
    previewLink: "https://finaltickapi-2pnysrrx2mapxmgmppenkh.streamlit.app/",
    githubLink: "https://github.com/Mohanapriyan6559/finaltickapi",
    tech: ["OpenAI API", "STT", "Voice"],
  },
  {
    title: "Farmer App",
    description: "Agriculture-focused platform with useful features for farmers.",
    image: Agroly,
    previewLink: "https://agroly.vercel.app/index.html",
    githubLink: "https://github.com/Mohanapriyan6559/Task",
    tech: ["HTML", "CSS", "JavaScript"],
  },
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

      <section
        className="py-16 px-4 sm:px-6 lg:px-12 text-black bg-gradient-to-b from-white via-slate-50 to-white"
        id="projects"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="inline-block bg-black text-white text-xs tracking-widest font-semibold px-3 py-1 rounded-full mb-4">
              PORTFOLIO
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold">Featured Projects</h1>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              A selection of apps I designed and built with modern frontend and
              full-stack technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-52 bg-slate-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="p-6 flex flex-col h-[260px]">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech?.map((item, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition"
                    >
                      Live Demo
                    </a>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 transition"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
