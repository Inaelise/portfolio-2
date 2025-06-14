import { projectData } from "../projectData";
import ProjectCard from "./ProjectCard";
import { MoveRight } from "lucide-react";

export default function Projects() {
  return (
    <>
      <div className="sections">
        <MoveRight size={28} />
        <h2 className="section-h2">My Projects</h2>
      </div>
      <ul className="flex flex-col gap-8 items-center mt-6 sm:gap-12">
        {projectData.map((project) => (
          <li key={project.id} className="max-w-[600px]">
            <ProjectCard
              id={project.id}
              name={project.name}
              teaser={project.teaser}
              image={project.image}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
