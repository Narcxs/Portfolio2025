import {
  EnvelopeSimple,
  House,
  Screencast,
  SuitcaseSimple,
  User,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { StateOfPage } from "../../../App";

export default function SideBarMenu() {
  const { actualpage, setactualpage, isActive } = useContext(StateOfPage);
  console.log(isActive);
  return (
    <div className="text-gray-400 text-sm font-light">
      <ul className="flex flex-col gap-y-2">
        <li
          className={` flex items-center gap-x-2 hover:text-white50 transition duration-500 cursor-pointer px-2 py-3 ${
            isActive("home")
              ? "text-white50 border border-black850 rounded-md font-medium bg-black900 shadow-sm"
              : null
          }`}
          onClick={() => setactualpage("home")}
        >
          <House size={22} />
          <span>Home</span>
        </li>
        <li
          className={` flex items-center gap-x-2 hover:text-white50 transition duration-500 cursor-pointer px-2 py-3 ${
            isActive("about")
              ? "text-white50 border border-black850 rounded-md font-medium bg-black900 shadow-sm"
              : null
          }`}
          onClick={() => setactualpage("about")}
        >
          <User size={22} />
          <span>About</span>
        </li>
        <li
          className={` flex items-center gap-x-2 hover:text-white50 transition duration-500 cursor-pointer px-2 py-3 ${
            isActive("projects")
              ? "text-white50 border border-black850 rounded-md font-medium bg-black900 shadow-sm"
              : null
          }`}
          onClick={() => setactualpage("projects")}
        >
          <SuitcaseSimple size={22} />
          <span>Projects</span>
        </li>
        <li
          className={` flex items-center gap-x-2 hover:text-white50 transition duration-500 cursor-pointer px-2 py-3 ${
            isActive("blog")
              ? "text-white50 border border-black850 rounded-md font-medium bg-black900 shadow-sm"
              : null
          }`}
          onClick={() => setactualpage("blog")}
        >
          <Screencast size={22} />
          <span>Blog</span>
        </li>
        <li
          className={` flex items-center gap-x-2 hover:text-white50 transition duration-500 cursor-pointer px-2 py-3 ${
            isActive("contact")
              ? "text-white50 border border-black850 rounded-md font-medium bg-black900 shadow-sm"
              : null
          }`}
          onClick={() => setactualpage("contact")}
        >
          <EnvelopeSimple size={22} />
          <span>Contact</span>
        </li>
      </ul>
    </div>
  );
}
