import React from "react";
import { FaTelegramPlane, FaGithub, FaInstagram, FaEnvelope, FaHome } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="./index.html" className="flex items-center space-x-2 text-xl font-semibold">
            <FaHome className="text-white" />
            <span>Home</span>
          </a>
          <div className="space-x-6">
            <a href="./about.html" className="hover:text-gray-300">About</a>
            <a href="./projects.html" className="hover:text-gray-300">Projects</a>
            <a href="./blog.html" className="hover:text-gray-300">Blog</a>
            <a href="./cv.html" className="hover:text-gray-300">CV</a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-10 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-8">EllaChang1011</h1>
        
        {/* Who am I */}
        <section className="py-6 border-b border-gray-300">
          <h2 className="text-2xl font-semibold mb-3">Who am I</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Ella Chang</li>
            <li>熊大</li>
            <li>Taipei, Taiwan</li>
          </ul>
        </section>

        {/* Education */}
        <section className="py-6 border-b border-gray-300">
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <strong>National Tsing Hua University (NTHU)</strong> - Interdisciplinary Program of Education (2020~)
            </li>
            <li>
              <strong>The Affiliated Senior High School of National Taiwan Normal University (HSNU)</strong> (2017~2020)
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section className="py-6 border-b border-gray-300">
          <h2 className="text-2xl font-semibold mb-3">Experience</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li><strong>Vice President</strong> of Ukulele Club at NTHU (2021~2022)</li>
            <li><strong>40th President</strong> of Computer Research Club at HSNU (2018~2019)</li>
          </ul>
        </section>

        {/* Contact Me */}
        <section className="py-6">
          <h2 className="text-2xl font-semibold mb-3">Contact Me</h2>
          <div className="flex space-x-6 mt-3">
            <a href="https://t.me/black_bear_1011" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="text-blue-500 text-4xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/EllaChang1011" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-700 text-4xl hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/black_bear_1011" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 text-4xl hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:ellating1011@gmail.com">
              <FaEnvelope className="text-red-500 text-4xl hover:scale-110 transition-transform" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
