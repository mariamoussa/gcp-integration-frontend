import React from "react";
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="header flex h-20 items-center px-4 gap-4 bg-white text-gray-800 shadow-md">
      <div className="flex items-center gap-2 mr-4">
        <span
          className="font-semibold text-lg logo text-black"
          style={{
            textShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
          }}
        >
          Trust Labs
        </span>
        <ChevronDownIcon className="h-5 w-5 text-gray-600" />
      </div>

      {/* Header Buttons */}
      <div className="ml-auto flex items-center gap-4">
        <button className="header-button hover:bg-gray-100 p-2 rounded-full">
          <QuestionMarkCircleIcon className="h-6 w-6 text-gray-700" />
        </button>

        <button className="header-button hover:bg-gray-100 p-2 rounded-full">
          <BellIcon className="h-6 w-6 text-gray-700" />
        </button>

        <button className="header-button hover:bg-gray-100 p-2 rounded-full">
          <Cog6ToothIcon className="h-6 w-6 text-gray-700" />
        </button>

        {/* Profile Icon */}
        <button className="inline-flex items-center justify-center gap-2 rounded-full h-8 w-8 bg-purple-100 text-purple-600 font-medium">
          S
        </button>
      </div>
    </header>
  );
};

export default Header;
