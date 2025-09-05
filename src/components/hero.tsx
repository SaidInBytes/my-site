
import React, { JSX } from "react";


import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiAmazon,
  SiAngular,
  SiReact,
  SiCss3,
  SiDocker,
  SiFigma,
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiVuedotjs,
  SiJenkins,
  SiMysql,
  SiMongodb,
  SiHtml5,
  SiGithubactions,
  SiPostgresql,
  SiRedux,
  SiSass,
  SiVite,
  SiFirebase,
  SiWordpress,
  SiDotnet,
} from "react-icons/si";

type Tool = {
  name: string;
  icon: JSX.Element;
};

const toolRows: Tool[][] = [
  [
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "AWS", icon: <SiAmazon /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "React", icon: <SiReact /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: ".NET", icon: <SiDotnet /> },
  ],
  [
    { name: "Docker", icon: <SiDocker /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Git", icon: <SiGit /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Vue.js", icon: <SiVuedotjs /> },
    { name: "Jenkins", icon: <SiJenkins /> },
  ],
  [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "GitHub Actions", icon: <SiGithubactions /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Sass", icon: <SiSass /> },
    { name: "Vite", icon: <SiVite /> },
  ],
  [
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "WordPress", icon: <SiWordpress /> },
    { name: "NextAuth.js", icon: <SiNextdotjs /> }, 
    { name: "Prisma", icon: <SiTypescript /> }, 
    { name: "Apollo Client", icon: <SiGraphql /> }, 
    { name: "Tailwind UI", icon: <SiTailwindcss /> }, 
    { name: "React Router", icon: <SiReact /> }, 
    { name: "Express.js", icon: <SiNodedotjs /> },
    

  ],
];

const Hero: React.FC = () => {
  return (
  <section className="flex flex-col md:flex-row items-center justify-center py-12 bg-gradient-to-br from-black via-gray-900 to-purple-900 min-h-[60vh] animate-fade-in">
  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl mb-6 md:mb-0 md:mr-10 border-4 border-purple-700/40">
        <img
          src="/space.png"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
  <div className="text-center md:text-left bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-white/20 mx-2">
  <h1 className="text-4xl md:text-6xl font-extrabold mb-2 text-white drop-shadow-lg">SaidInBytes</h1>
  <p className="text-xl md:text-2xl text-purple-300 font-semibold mb-2">Full Stack Developer</p>
  <span className="inline-block mt-2 mb-4 px-4 py-2 bg-purple-700/80 rounded-full text-white font-semibold shadow-lg animate-bounce">Building cool stuff 🚀</span>
        <div className="mt-8">
    <h2 className="text-lg font-semibold mb-4 text-white">All the tools I can use</h2>
          <div className="flex flex-col gap-3">
            {toolRows.map((row, i) => (
              <div key={i} className="flex flex-wrap justify-center md:justify-start gap-4">
                {row.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center bg-white/10 rounded-lg p-2 shadow-md border border-white/10">
                    <span className="text-3xl text-purple-300 drop-shadow-lg">{tool.icon}</span>
                    <span className="text-xs text-white font-semibold mt-1">{tool.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
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
    </section>
  );
};

export default Hero;