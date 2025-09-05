import React, { useState } from "react";

type Project = {
  title: string;
  description: string;
  overview: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Projekt 1",
    description: "Kort beskrivning av projekt .",
    overview: "Här är en längre överblick av projekt  med mer detaljerad information.",
    github: "",
  },
  {
    title: "Projekt 2 ",
    description: "Kort beskrivning av projekt 2.",
    overview: "Här är en längre överblick av projekt  med mer detaljerad information.",
    github: "",
  },
  {
    title: "Projekt 3 ",
    description: "Kort beskrivning av projekt .",
    overview: "Här är en längre överblick av projekt  med mer detaljerad information.",
    github: "",
  },
  {
    title: "Projekt 4",
    description: "Kort beskrivning av projekt .",
    overview: "Här är en längre överblick av projekt  med mer detaljerad information.",
    github: "",
  },
  {
    title: "Projekt 5",
    description: "Kort beskrivning av projekt .",
    overview: "Här är en längre överblick av projekt med mer detaljerad information.",
    github: "",
  },
  {
    title: "Projekt 6",
    description: "Kort beskrivning av projekt .",
    overview: "Här är en längre överblick av projekt  med mer detaljerad information.",
    github: "",
  },
];

const ProjectCarousel: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
  <section className="py-12 bg-gradient-to-br from-black via-gray-900 to-purple-900 min-h-[60vh] flex flex-col items-center justify-center animate-fade-in">
      <h2 className="text-2xl font-bold text-center mb-8">Mina projekt</h2>
      <div className="flex overflow-x-auto gap-6 px-4">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="min-w-[250px] bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-4 border border-white/20 cursor-pointer hover:scale-105 transition-transform animate-fade-in"
            onClick={() => setActive(idx)}
          >
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>

      
      {active !== null && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900 bg-opacity-30 flex items-center justify-center z-50"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 max-w-md w-full relative border border-white/20 animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 text-2xl"
              onClick={() => setActive(null)}
              aria-label="Stäng"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-2">{projects[active].title}</h3>
            <p className="mb-4">{projects[active].overview}</p>
            <a
              href={projects[active].github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Till GitHub
            </a>
          </div>
        </div>
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
    </section>
  );
};

export default ProjectCarousel;