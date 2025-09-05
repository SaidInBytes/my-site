import React, { useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <header className="bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white p-4 shadow-2xl animate-fade-in">
  <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-4 border border-white/20 mx-2">
  <h1 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg">InBytes</h1>
        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none bg-purple-700/80 rounded-full shadow-lg border border-white/20"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline text-purple-300">Home</a></li>
            <li><a href="/about" className="hover:underline text-purple-300">About</a></li>
            <li><a href="/project" className="hover:underline text-purple-300">Project</a></li>
            <li><a href="/contact" className="hover:underline text-purple-300">Contact</a></li>
          </ul>
        </nav>
      </div>
      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="md:hidden mt-2 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 animate-fade-in">
          <ul className="flex flex-col space-y-2 p-4">
            <li><a href="/" className="hover:underline text-purple-300 font-semibold" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="/about" className="hover:underline text-purple-300 font-semibold" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="/project" className="hover:underline text-purple-300 font-semibold" onClick={() => setMenuOpen(false)}>Project</a></li>
            <li><a href="/contact" className="hover:underline text-purple-300 font-semibold" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    <style jsx>{`
      .animate-fade-in {
        animation: fadeIn 1.2s ease;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}</style>
    </header>
  );
}

export default Header;