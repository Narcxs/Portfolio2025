import { useContext } from "react";
import { Link } from "react-router";
import StateOfPage from "../../../../context/StateOfPage";
import StacksList from "./HomeItems/StacksList";

export default function Home() {
  const { actualpage, setactualpage, isActive } = useContext(StateOfPage);

  return (
    <>
      <span className="font-light text-sm sm:text-md flex items-center gap-x-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-black850 rounded-lg w-[140px] sm:w-[165px] mb-3 sm:mb-4 shadow-md">
        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-active"></div>
        Available for Work
      </span>

      <div className="mb-6 sm:mb-8">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
          Hi, I&apos;m Morello, <br /> a Front-End Developer.
        </h1>
        <p className="text-gray400 text-sm sm:text-base">
          I&apos;ve been building websites and user-friendly interfaces for 2
          years.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-3 sm:gap-y-0 gap-x-0 sm:gap-x-3 pb-6 sm:pb-8 border-b-[1px] border-dashed border-gray-600 mb-16 sm:mb-20">
        <a href="mailto:morello.dev@gmail.com" className="w-full sm:w-auto">
          <button className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white50 rounded-lg text-black950 font-semibold text-sm">
            Get In Touch
          </button>
        </a>
        <Link to="/about" className="w-full sm:w-auto">
          <button
            onClick={() => setactualpage("about")}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-white50 border rounded-lg text-sm bg-black900 border-gray-600"
          >
            About Me
          </button>
        </Link>
      </div>

      <div className="w-full">
        <StacksList />
      </div>
    </>
  );
}
