import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 h-20 flex items-center fixed bottom-0 left-0 w-full z-10 shadow-xl">
      <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-lg font-semibold text-white tracking-wide">
            Personal Portfolio
          </span>
        </div>

        <div className="text-sm text-gray-300 hidden md:block">
          © {new Date().getFullYear()} Abhishek Gupta. Crafted with React &
          Tailwind CSS.
        </div>

        <div className="flex space-x-5">
          <a
            href="https://github.com/abhishekguptaji"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://linkedin.com/in/abhishekgupta1864"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/abhishek__gupta2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="mailto:abhishekgupta1864@gmail.com"
            className="hover:scale-110 transition"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
