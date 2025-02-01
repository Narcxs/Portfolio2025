import { useContext } from "react";
import { Route, Routes } from "react-router";
import StateOfPage from "../../context/StateOfPage";
import About from "./MenuHome/About/About";
import Contact from "./MenuHome/Contact/Contact";
import ErrorPage from "./MenuHome/ErrorPage/ErrorPage";
import Home from "./MenuHome/Home/Home";
import Projects from "./MenuHome/Projects/Projects";
export default function MenuHome() {
  const { actualpage, setactualpage, isActive } = useContext(StateOfPage);
  const Layout = ({ children }) => (
    <div className="w-full h-screen bg-black99 pl-10 py-32">
      <div className="w-[1200px] h-full mx-auto text-white50">{children}</div>
    </div>
  );

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
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}
