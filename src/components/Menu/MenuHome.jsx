import { useContext } from "react";
import { StateOfPage } from "../../App";
import About from "./MenuHome/About/About";
import Blog from "./MenuHome/Blog/Blog";
import Contact from "./MenuHome/Contact/Contact";
import Home from "./MenuHome/Home/Home";
import Projects from "./MenuHome/Projects/Projects";
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
