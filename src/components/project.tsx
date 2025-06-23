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
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Mina projekt</h2>
      <div className="flex overflow-x-auto gap-6 px-4">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="min-w-[250px] bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setActive(idx)}
          >
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>

      
      {active !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
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
    </section>
  );
};

export default ProjectCarousel;