import SideBarMenu from "./SidebarComponents/SideBarMenu";

export default function Sidebar() {
  return (
    <div className="px-6 py-3 w-[320px] h-screen  border-r-[1px] border-gray-600">
      <header className="mb-14 py-4">
        <div className="flex gap-x-2.5 border-b-[1px] border-dashed border-gray-600 pb-5 items-center">
          <div className="w-14 h-14 bg-black rounded-md"></div>
          <div className="flex flex-col justify-start">
            <h3 className="font-medium text-white50 text-lg">Morello</h3>
            <p className="text-sm font-medium text-gray-400">
              Front End Enginer
            </p>
          </div>
        </div>
      </header>
      <SideBarMenu />
    </div>
  );
}
