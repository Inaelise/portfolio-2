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
    <header>
      <img src="/images/logo-black.png" alt="logo" className="w-20" />
      <nav>
        <ul>
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
