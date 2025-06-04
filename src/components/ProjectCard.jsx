import { Link } from "react-router";

export default function ProjectCard({ id, name, teaser, image }) {
  return (
    <Link
      to={`/project/${id}`}
      title="Go to project page"
      className="relative group block w-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="sm:absolute sm:inset-0 sm:bg-black sm:opacity-0 group-hover:opacity-90 transition-opacity duration-300 ease-in-out flex flex-col gap-2 py-2 text-white sm:p-4 md:items-center md:justify-center">
        <h3 className="font-semibold md:text-xl">{name}</h3>
        <p className="text-sm md:text-base">{teaser}</p>
      </div>
    </Link>
  );
}
