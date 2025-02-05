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
    <div className="w-full  bg-black px-4 sm:px-6 md:px-8 lg:pl-[100px] py-8 sm:py-16 md:py-24 lg:py-32  ml-0 lg:ml-[100px] overflow-hidden pt-16">
      <div className="w-full max-w-[1200px] h-full mx-auto text-white50">
        {children}
      </div>
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
