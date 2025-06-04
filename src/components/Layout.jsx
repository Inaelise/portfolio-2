import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import { Outlet, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const MotionSection = motion.section;
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
      <main className="flex flex-col gap-20 mx-auto max-w-[800px]">
        {isHome ? (
          <>
            <MotionSection
              id="home"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0}
            >
              <Home />
            </MotionSection>
            <MotionSection
              id="projects"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1}
              className="px-4"
            >
              <Projects />
            </MotionSection>
            <MotionSection
              id="contact"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={2}
              className="px-4"
            >
              <Contact />
            </MotionSection>
          </>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </>
  );
}
