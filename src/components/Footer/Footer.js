import React from "react";
import {
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto w-[90%] flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm text-gray-400"><span className="text-lg text-white font-semibold pr-4">E-Bharat</span>© {new Date().getFullYear()} All rights reserved</p>
        </div>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/Yugal2003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/yourwhatsapplink"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/yugal___6832/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/yugal-kumbhare-7b9825284/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;