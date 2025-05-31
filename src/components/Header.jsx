import { useNavigate, useLocation } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header className="fixed top-0 flex justify-between items-center bg-dark w-full py-3 px-4">
      <img src="/images/simplelogo-white.png" alt="logo" className="w-10" />
      <nav>
        <ul className="flex">
          <li>
            <button onClick={() => handleNavClick("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleNavClick("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleNavClick("contact")}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
