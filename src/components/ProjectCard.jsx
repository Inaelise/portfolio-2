import { Link } from "react-router";

export default function ProjectCard({ id, name, teaser, image }) {
  return (
    <Link to={`/project/${id}`}>
      <img src={image.src} alt={image.alt} />
      <h3>{name}</h3>
      <p>{teaser}</p>
    </Link>
  );
}
