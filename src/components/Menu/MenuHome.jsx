import { useContext } from "react";
import { StateOfPage } from "../../App";
import About from "../Menu/MenuHome/About";
import Blog from "../Menu/MenuHome/Blog";
import Contact from "../Menu/MenuHome/Contact";
import Home from "../Menu/MenuHome/Home";
import Projects from "../Menu/MenuHome/Projects";
export default function MenuHome() {
  const { actualpage, setactualpage, isActive } = useContext(StateOfPage);
  const renderPage = (page) => {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return (
    <div className="w-full h-screen bg-black950 pl-10 py-32">
      <div className="w-[1200px] h-full mx-auto text-white50">
        {renderPage(actualpage)}
      </div>
    </div>
  );
}
