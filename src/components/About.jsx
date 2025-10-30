import Resume from "../assets/Abhishek_Gupta_.pdf";
import UserImage from "../assets/abhishek_image.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-12 transition-all duration-300 hover:shadow-gray-400/40">
        <div className="flex flex-col items-center text-center md:w-1/3 space-y-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-30"></div>
            <img
              src={UserImage}
              alt="Abhishek Gupta"
              className="relative w-44 h-44 rounded-full shadow-xl object-cover border-4 border-white"
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-3">
            Abhishek Gupta
          </h1>
          <p className="text-gray-600 font-medium">
            Aspiring Software Developer <br />
            Final Year Computer Science Student
          </p>

          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white mt-4 px-6 py-2 rounded-lg font-medium hover:scale-105 hover:shadow-md transition-transform duration-300"
          >
            View Resume
          </a>
        </div>

        {/* Right: About Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-5">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            I am a passionate <span className="font-semibold text-indigo-600">Software Developer </span> 
            with hands-on experience in building full-stack web applications using 
            modern technologies such as <span className="font-semibold text-gray-800">React</span>, 
            <span className="font-semibold text-gray-800"> PHP</span>, and 
            <span className="font-semibold text-gray-800"> Laravel</span>.  
            I enjoy solving complex problems, optimizing performance, and crafting 
            intuitive user experiences.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg mt-4">
            Currently pursuing my <span className="font-semibold text-gray-800">B.Tech in Computer Science and Engineering </span> 
            at <span className="text-indigo-600 font-semibold">Greater Noida Institute of Technology </span>.  
            I’m always eager to learn new technologies, contribute to impactful projects, 
            and grow as a developer.
          </p>

          <div className="mt-6 flex justify-center md:justify-start gap-4">
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
      </div>
    </section>
  );
}

export default About;
