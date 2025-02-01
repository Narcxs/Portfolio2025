import {
  EnvelopeSimple,
  House,
  SuitcaseSimple,
  User,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { Link } from "react-router";
import StateOfPage from "../../../context/StateOfPage";

export default function SideBarMenu() {
  const { actualpage, setactualpage, isActive } = useContext(StateOfPage);

  const handlePageChange = (page) => {
    setactualpage(page);
  };

  return (
    <div className="text-gray-400 text-sm font-light">
      <ul className="flex flex-col gap-y-2">
        <Link to="/" onClick={() => handlePageChange("home")}>
          <li
            className={`flex items-center gap-x-2 hover:text-white50 transition duration-500 cursor-pointer px-2 py-3 ${
              isActive("home")
                ? "text-white50 border border-black850 rounded-md font-medium bg-black900 shadow-sm"
                : ""
            }`}
          >
            <House size={22} />
            <span>Home</span>
          </li>
        </Link>

        <Link to="/about" onClick={() => handlePageChange("about")}>
          <li
            className={`flex items-center gap-x-2 hover:text-white50 transition duration-500 cursor-pointer px-2 py-3 ${
              isActive("about")
                ? "text-white50 border border-black850 rounded-md font-medium bg-black900 shadow-sm"
                : ""
            }`}
          >
            <User size={22} />
            <span>About</span>
          </li>
        </Link>

        <Link to="/projects" onClick={() => handlePageChange("projects")}>
          <li
            className={`flex items-center gap-x-2 hover:text-white50 transition duration-500 cursor-pointer px-2 py-3 ${
              isActive("projects")
                ? "text-white50 border border-black850 rounded-md font-medium bg-black900 shadow-sm"
                : ""
            }`}
          >
            <SuitcaseSimple size={22} />
            <span>Projects</span>
          </li>
        </Link>

        <Link to="/contact" onClick={() => handlePageChange("contact")}>
          <li
            className={`flex items-center gap-x-2 hover:text-white50 transition duration-500 cursor-pointer px-2 py-3 ${
              isActive("contact")
                ? "text-white50 border border-black850 rounded-md font-medium bg-black900 shadow-sm"
                : ""
            }`}
          >
            <EnvelopeSimple size={22} />
            <span>Contact</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}
