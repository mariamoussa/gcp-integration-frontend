import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MainPage from "./routes/MainPage";
import "./index.css";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("Starter guide");

  return (
    <div className="app flex flex-col h-screen">
      <Header />
      <div className="layout flex flex-grow">
        <Sidebar
          selectedOption={selectedOption}
          onOptionClick={setSelectedOption}
        />
        <main className="main-content flex-grow overflow-y-auto p-4 bg-white-100 relative">
          <MainPage selectedOption={selectedOption} />
        </main>
      </div>
    </div>
  );
};

export default App;
