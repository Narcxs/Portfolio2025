import { useContext } from "react";
import { StateOfPage } from "../../../../App";
import StacksList from "./HomeItems/StacksList";
export default function Home() {
  const { actualpage, setactualpage, isActive } = useContext(StateOfPage);
  return (
    <>
      <span className="font-light text-md flex items-center gap-x-1.5 px-3 py-1.5 bg-black850 rounded-lg w-[165px] mb-4 shadow-md">
        <div className="w-2 h-2 rounded-full bg-active"></div>
        Available for Work
      </span>
      <div className="mb-8">
        <h1 className="font-semibold text-5xl mb-4">
          Hi, I'm Morello, <br /> a Front-End Developer.
        </h1>
        <p className="text-gray400 text-base">
          I've been building websites and user-friendly interfaces for 2 years.
        </p>
      </div>
      <div className="flex items-center gap-x-3 pb-8 border-b-[1px] border-dashed border-gray-600 mb-20">
        <button className="px-4 py-3 bg-white50 rounded-lg text-black950 font-semibold text-sm">
          <a href="mailto:simeon.morello11@gmail.com">Get In Touch</a>
        </button>
        <button
          onClick={() => setactualpage("about")}
          className="px-4 py-3 text-white50 border rounded-lg text-sm bg-black900 border-gray-600"
        >
          About Me
        </button>
      </div>
      <div className="h-[400px]">
        <StacksList />
      </div>
    </>
  );
}
