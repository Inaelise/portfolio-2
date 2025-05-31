import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import PageNotFound from "./components/PageNotFound";
import Project from "./components/Project";
import { useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
