import { default as React, useState } from "react";
import { BrowserRouter } from "react-router";
import MenuHome from "./components/Menu/MenuHome";
import Sidebar from "./components/Sidebar/Sidebar";
import StateOfPage from "./context/StateOfPage";

function App() {
  const [actualpage, setactualpage] = useState("home");
  const isActive = (page) => actualpage === page;

  return (
    <div className="font-sans w-full h-screen bg-black950 flex">
      <BrowserRouter>
        <StateOfPage.Provider value={{ actualpage, setactualpage, isActive }}>
          <Sidebar />
          <MenuHome />
        </StateOfPage.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
