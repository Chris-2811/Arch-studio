import Button from '../ui/Button';
import { useState } from 'react';
import { projects } from '@/constants/projects';

function HeroHome() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section className="md:myContainer">
      <div
        role="image"
        className={`relative px-8 md:px-[3.6125rem] lg:px-[11.875rem] pt-[7.25rem] xxl:pt-[11rem] bg-${selectedProject.bg}-mobile md:bg-${selectedProject.bg}-tablet lg:bg-${selectedProject.bg}-desktop h-[560px] md:h-[720px] bg-cover bg-no-repeat`}
      >
        <div className="absolute inset-0 bg-black/20 "></div>
        <div className="relative text-white z-10">
          <div>
            <h2 className="text-5xl text-white md:text-8xl font-bold tracking-[-1.2px] leading-none md:leading-[0.8333] lg:max-w-[544px]">
              {selectedProject.title}
            </h2>
            <p className="mt-3 text-white mb-20 text-lg max-w-[457px] md:mb-10 lg:mb-4 h-[6rem]">
              {selectedProject.description}
            </p>
          </div>
          <Button to="/portfolio">See Our Portfolio</Button>
        </div>
        <div className="absolute bottom-0 -left-20 hidden xl:block">
          <ul className="flex items-center" aria-label="Project selection">
            {projects.map((project, index) => (
              <li key={project.id} onClick={() => setSelectedProject(project)}>
                <Button active={selectedProject.id === project.id}>
                  {String(index + 1).padStart(2, '0')}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
