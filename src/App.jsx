import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
