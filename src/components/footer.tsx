import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full text-center py-4 text-gray-500">
      &copy; {new Date().getFullYear()}
      <span className="ml-2">SaidInBytes</span>
      
    </footer>
  );
};

export default Footer;