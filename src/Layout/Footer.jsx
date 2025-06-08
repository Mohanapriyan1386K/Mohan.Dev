import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">About Me</h2>
          <p className="text-sm">
            I’m a passionate web developer focused on building user-friendly, responsive websites and creative digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
        <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
        <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">About</Link></li>
            <li><Link to="/Project" className="hover:text-white transition">Projects</Link></li>
            <li><Link to="/Services" className="hover:text-white transition">Services</Link></li>
            <li><Link to="/Blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link to="/Casestudies" className="hover:text-white transition">Case Studies</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
        </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Connect with Me</h2>
          <div className="flex gap-10">
            <a href="https://github.com/Mohanapriyan1386K" target="_blank" rel="noreferrer" className="hover:text-white">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/mohana-priyan-k-42b579252/" target="_blank" rel="noreferrer" className="hover:text-white">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-white">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © 2025 Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
