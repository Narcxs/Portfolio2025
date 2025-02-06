import { useContext } from "react";
import { Route, Routes } from "react-router";
import StateOfPage from "../../context/StateOfPage";
import Layout from "./Layout";
import About from "./MenuHome/About/About";
import Contact from "./MenuHome/Contact/Contact";
import ErrorPage from "./MenuHome/ErrorPage/ErrorPage";
import Home from "./MenuHome/Home/Home";
import Projects from "./MenuHome/Projects/Projects";

export default function MenuHome() {
  const { actualpage, setactualpage, isActive } = useContext(StateOfPage);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
