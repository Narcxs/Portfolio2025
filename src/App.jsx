import { createContext, default as React, useState } from "react";
import MenuHome from "./components/Menu/MenuHome";
import Sidebar from "./components/Sidebar/Sidebar";
export const StateOfPage = createContext();

function App() {
  const isActive = (page) => actualpage === page;
  const [actualpage, setactualpage] = useState("home");
  console.log(actualpage);
  return (
    <div className="font-sans w-full h-screen bg-black950 flex">
      <StateOfPage.Provider value={{ actualpage, setactualpage, isActive }}>
        <Sidebar />
        <MenuHome />
      </StateOfPage.Provider>
    </div>
  );
}

export default App;
