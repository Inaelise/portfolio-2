import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate, useLocation, Link } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  const sectionIds = useMemo(() => ["home", "projects", "contact"], []);
  const observers = useRef([]);

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
        observers.current.push(() => observer.unobserve(section));
      }
    });

    return () => {
      observers.current.forEach((unobserve) => unobserve());
      observers.current = [];
    };
  }, [sectionIds]);

  return (
    <header className="fixed top-0 flex justify-between items-center bg-dark w-full py-3 px-4 z-50 font-second text-sm drop-shadow-md">
      <Link to="/" title="Go to home">
        <img src="/images/simplelogo-white.png" alt="logo" className="w-10" />
      </Link>
      <nav>
        <ul className="flex gap-6">
          {sectionIds.map((section) => (
            <li
              key={section}
              className={`${
                activeSection === section
                  ? "border-b-1 border-white hover:border-purple-400"
                  : "border-b-1 border-transparent"
              } animate`}
            >
              <button
                onClick={() => handleNavClick(section)}
                className="text-white cursor-pointer hover:text-purple-400 animate"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
