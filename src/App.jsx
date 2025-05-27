import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import PageNotFound from "./components/PageNotFound";
import Project from "./components/Project";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="project/:id" element={<Project />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
