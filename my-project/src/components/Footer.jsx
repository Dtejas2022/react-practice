import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column */}
          <div>
          <img src="logo.jpg" alt="Logo" className="h-[20vh] rounded-3xl p-2" />

            {/* <div className="text-2xl font-bold mb-4">Company Logo</div> */}
            <div className="mb-4">
              <a href="mailto:example@example.com" className="flex items-center mb-2">
                <FaEnvelope className="text-white text-xl mr-2" />
                <span>Email: example@example.com</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://t.me/example" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="text-white text-2xl" />
              </a>
              <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-2xl" />
              </a>
              <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-2xl" />
              </a>
            </div>
          </div>

          {/* Second Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jump To</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#achievers" className="hover:text-gray-400">Achievers</a></li>
              <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#blogs" className="hover:text-gray-400">Blogs</a></li>
              <li><a href="#profile" className="hover:text-gray-400">User Profile</a></li>
              <li><a href="#faqs" className="hover:text-gray-400">FAQs</a></li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Let’s Study</h3>
            <ul className="space-y-2">
              <li><a href="#questions" className="hover:text-gray-400">Questions</a></li>
              <li><a href="#study-material" className="hover:text-gray-400">Study Material</a></li>
              <li><a href="#roadmaps" className="hover:text-gray-400">Roadmaps</a></li>
              <li><a href="#cheatsheet" className="hover:text-gray-400">Cheatsheet</a></li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Select Your Goal</h3>
            <ul className="space-y-2">
              <li><a href="#gate-cs" className="hover:text-gray-400">GATE CS</a></li>
              <li><a href="#gate-da" className="hover:text-gray-400">GATE DA</a></li>
              <li><a href="#iiit" className="hover:text-gray-400">IIIT</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
