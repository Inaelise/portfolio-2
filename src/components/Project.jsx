import { motion } from "framer-motion";
import { useParams } from "react-router";
import { projectData } from "../projectData";

export default function Project() {
  const MotionMain = motion.main;
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p>No project found.</p>;
  }

  return (
    <MotionMain
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1>{project.name}</h1>
      <img src={project.image.src} alt={project.image.alt} />
      <p>{project.description}</p>
      <p>{project.reflection}</p>
      <div>
        <a href={project.links.live}>Live</a>
        <a href={project.links.repo}>Repo</a>
      </div>
    </MotionMain>
  );
}
