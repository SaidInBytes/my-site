import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-black via-gray-900 to-purple-900 min-h-[60vh] flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 max-w-2xl mx-auto border border-white/20 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-white drop-shadow-lg">About Me</h2>
        <p className="text-lg text-gray-200 text-center leading-relaxed">
          I’m a fullstack developer with a background in administration and coordination, now fully focused on building modern web applications. At Ziello AB I gained hands-on experience working on real projects and collaborating in a team environment. Currently, I’m freelancing, which allows me to keep exploring new technologies and sharpening my skills.<br/><br/>
          I enjoy working with both frontend and backend, using technologies like JavaScript, TypeScript, React, and Node.js. What drives me is solving problems, creating smooth user experiences, and constantly learning new things.<br/><br/>
          Right now, I’m looking for opportunities to grow further as a developer, contribute to exciting projects, and push my skills forward.
        </p>
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
    </section>
  );
};

export default About;
