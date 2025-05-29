import { motion } from "framer-motion";
import { useParams, useLocation } from "react-router";
import { projectData } from "../projectData";
import { useState } from "react";
import { Share2 } from "lucide-react";

export default function Project() {
  const { id } = useParams();
  const location = useLocation();
  const [toast, setToast] = useState(false);

  const MotionMain = motion.main;
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p>No project found.</p>;
  }

  const handleShare = async () => {
    const url = `${window.location.origin}${location.pathname}`;
    try {
      await navigator.clipboard.writeText(url);
      setToast(true);
      setTimeout(() => setToast(false), 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

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
      <div>
        <button onClick={handleShare} title="Copy to clipboard">
          <Share2 />
        </button>
      </div>
      {toast && (
        <div>
          <p>Copied to clipboard!</p>
        </div>
      )}
    </MotionMain>
  );
}
