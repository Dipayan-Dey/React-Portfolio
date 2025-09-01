import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { SiFiverr } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col items-center px-6 space-y-4">
        
        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a href="https://www.instagram.com/dipayan.official.2006/" target="_blank" rel="noreferrer" 
             className="hover:text-pink-500 transform hover:scale-110 transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/dipayan.dey.489987" target="_blank" rel="noreferrer" 
             className="hover:text-blue-500 transform hover:scale-110 transition duration-300">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/in/dipayan-dey-033b38309/" target="_blank" rel="noreferrer" 
             className="hover:text-blue-400 transform hover:scale-110 transition duration-300">
            <FaLinkedinIn />
          </a>
          <a href="https://www.fiverr.com/dipayandey2006" target="_blank" rel="noreferrer" 
             className="hover:text-green-500 transform hover:scale-110 transition duration-300">
            <TbBrandFiverr />
          </a>
          <a href="https://github.com/Dipayan-Dey" target="_blank" rel="noreferrer" 
             className="hover:text-white transform hover:scale-110 transition duration-300">
            <FaGithub />
          </a>
          <a href="https://x.com/DipayanDey1711?t=jXzyq4QeQY_OtsrFp6jYvw&s=09" target="_blank" rel="noreferrer" 
             className="hover:text-sky-400 transform hover:scale-110 transition duration-300">
            <FaTwitter />
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-2/3 border-t border-gray-700"></div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Dipayan Dey | All Rights Reserved
        </p>
        <p className="text-xs text-gray-500">
          Made with ❤️ by <span className="text-white">Dipayan Dey</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
