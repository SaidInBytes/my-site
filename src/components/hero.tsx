import React from "react";
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
    { name: "NextAuth.js", icon: <SiNextdotjs /> }, // Using Next.js icon for NextAuth.js
    { name: "Prisma", icon: <SiTypescript /> }, // Using TypeScript icon for Prisma
    { name: "Apollo Client", icon: <SiGraphql /> }, // Using GraphQL icon for Apollo Client
    { name: "Tailwind UI", icon: <SiTailwindcss /> }, // Using Tailwind CSS icon for Tailwind UI
    { name: "React Router", icon: <SiReact /> }, // Using React icon for React Router
    { name: "Styled Components", icon: <SiCss3 /> }, // Using CSS3 icon for Styled Components
  ],
];

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12">
      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-10">
        <img
          src="/space.png"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">SaidInBytes</h1>
        <p className="text-xl md:text-2xl text-gray-600">Full Stack Developer</p>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">All the tools I can use</h2>
          <div className="flex flex-col gap-3">
            {toolRows.map((row, i) => (
              <div key={i} className="flex flex-wrap justify-center md:justify-start gap-4">
                {row.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center">
                    <span className="text-3xl">{tool.icon}</span>
                    <span className="text-xs">{tool.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;