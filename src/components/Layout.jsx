import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import { Outlet, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (isHome && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });

          navigate(location.pathname, { replace: true, state: {} });
        }, 100);
      }
    }
  }, [isHome, location, navigate]);

  return (
    <>
      <Header />
      <main>
        {isHome ? (
          <>
            <section id="home">
              <Home />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </>
  );
}
