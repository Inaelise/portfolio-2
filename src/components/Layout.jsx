import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import { Outlet, useLocation } from "react-router";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

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
