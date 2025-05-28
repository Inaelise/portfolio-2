import { projectData } from "../projectData";
import ProjectCard from "./ProjectCard";
import { MoveRight } from "lucide-react";

export default function Projects() {
  return (
    <>
      <div>
        <MoveRight />
        <h2>Projects</h2>
      </div>
      <ul>
        {projectData.map((project) => (
          <li key={project.id}>
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
