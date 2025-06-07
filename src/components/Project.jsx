import { motion } from "framer-motion";
import { useParams, useLocation } from "react-router";
import { projectData } from "../projectData";
import { useState, useEffect } from "react";
import { Share2, MoveLeft } from "lucide-react";
import { Link } from "react-router";

export default function Project() {
  const { id } = useParams();
  const location = useLocation();
  const [toast, setToast] = useState(false);

  // Custom scroll animation
  useEffect(() => {
    const scrollToTop = () => {
      const start = window.scrollY;
      const duration = 1000;
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        window.scrollTo(0, start * (1 - ease));

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      requestAnimationFrame(animateScroll);
    };

    scrollToTop();
  }, []);

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
      <Link
        to="/"
        title="Go to home"
        className="inline-block pl-4 mb-4 md:pl-0 hover:text-purple-400 animate hover"
      >
        <MoveLeft strokeWidth={1.5} size={28} />
      </Link>
      <h1 className="text-2xl mb-4 pl-4 md:pl-0">{project.name}</h1>
      <img src={project.image.src} alt={project.image.alt} />
      <div className="flex flex-col gap-8 p-4 md:p-0 md:py-4">
        <div>
          <h2 className="project-h2">Description</h2>
          <p>{project.description}</p>
        </div>
        <div>
          <h2 className="project-h2">Reflections</h2>
          <p>{project.reflection}</p>
        </div>
        <div className="flex gap-6 sm:gap-16 my-6 items-center">
          <a
            href={project.links.live}
            target="_blank"
            className="hover animate border-1 px-6 py-1 font-medium hover:bg-white hover:text-dark"
          >
            Live
          </a>
          <a
            href={project.links.repo}
            target="_blank"
            className="hover animate border-1 px-6 py-1 font-medium hover:bg-white hover:text-dark"
          >
            Repo
          </a>
          <div className="relative">
            <button
              onClick={handleShare}
              title="Copy to clipboard"
              className="cursor-pointer flex gap-2 hover animate"
            >
              <Share2 /> Copy
            </button>
            {toast && (
              <div className="relative">
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-2 rounded-md shadow-md">
                  Copied to clipboard!
                  <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-black"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MotionMain>
  );
}
