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

      <aside
        className={`sidebar fixed top-0 left-0 h-screen w-[320px]
        bg-black950 lg:bg-transparent border-r border-gray-600
        transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="px-6 py-3">
          <header className="mb-14 py-4">
            <div className="flex gap-x-2.5 border-b border-dashed border-gray-600 pb-5 items-center">
              <div className="w-10 h-10 bg-black rounded-md overflow-hidden">
                <img
                  src="/About/profile.jpg"
                  alt="Photo de profil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-start">
                <h3 className="font-medium text-white50 text-lg">Morello</h3>
                <p className="text-sm font-medium text-gray-400">
                  Full-Stack Developer
                </p>
              </div>
            </div>
          </header>
          <SideBarMenu setIsOpen={setIsOpen} />
        </div>
      </aside>
    </>
  );
}
