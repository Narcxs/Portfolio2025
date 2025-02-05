import { useEffect, useState } from "react";
import SideBarMenu from "./SidebarComponents/SideBarMenu";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if (
      isOpen &&
      e.target.closest(".sidebar") === null &&
      e.target.closest(".burger-button") === null
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      {/* Bouton Burger Menu */}
      <button
        className={`lg:hidden fixed top-4 left-4 z-50 p-2 burger-button ${
          isOpen ? "hidden" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-all ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar fixed lg:static transition-all duration-300
        px-6 py-3 w-[320px] min-h-screen border-r border-gray-600
        bg-black950 lg:bg-transparent z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        lg:opacity-100 lg:visible
      `}
      >
        <header className="mb-14 py-4">
          <div className="flex gap-x-2.5 border-b border-dashed border-gray-600 pb-5 items-center">
            <div className="w-14 h-14 bg-black rounded-md"></div>
            <div className="flex flex-col justify-start">
              <h3 className="font-medium text-white50 text-lg">Morello</h3>
              <p className="text-sm font-medium text-gray-400">
                Front-End Developer
              </p>
            </div>
          </div>
        </header>
        <SideBarMenu />
      </div>
    </>
  );
}
