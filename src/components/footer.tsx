import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full text-center py-6 bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white shadow-2xl animate-fade-in">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <span className="text-lg">&copy; {new Date().getFullYear()} <span className="font-bold text-purple-300">SaidInBytes</span></span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://github.com/SaidInBytes" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 text-2xl transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/saidinbytes" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 text-2xl transition">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;