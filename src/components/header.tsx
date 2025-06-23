import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="flex items-center justify-between">
        
        <h1 className="text-2xl font-bold">InBytes</h1>
        
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/project" className="hover:underline">Project</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;