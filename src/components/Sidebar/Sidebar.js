import React, { useState } from "react";
import {
  Search,
  House,
  ClipboardList,
  Shield,
  ShieldCheck,
  CircleAlert,
  Building2,
  HardDrive,
  Users,
  Cable,
  PersonStanding,
  Users2,
  HardDriveIcon,
  Building2Icon,
  CircleAlertIcon,
  ShieldHalfIcon,
  ChartNoAxesColumnIcon,
  ShieldHalf,
} from "lucide-react"; 

function Sidebar({ selectedOption, onOptionClick }) {
  return (
    <div className="fixed top-20 left-0 z-50 flex flex-col border-r bg-gray-50" 
         style={{
           height: "calc(100vh - 5rem)", 
           width: "16rem",
         }}>
      <div className="px-4 py-2">
        <div className="relative">
          <input
            placeholder="Find..."
            className="w-full rounded-md border border-gray-300 bg-white px-8 py-2 text-sm pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 p-4">
        <a
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
            selectedOption === "Home"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          href="guide"
          onClick={() => onOptionClick("Home")}
        >
          <House className="h-4 w-4" />
          <span>Home</span>
        </a>

        <a
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
            selectedOption === "Starter guide"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          href="guide"
          onClick={() => onOptionClick("Starter guide")}
        >
          <ClipboardList className="h-4 w-4" />
          <span>Starter guide</span>
          <span className="ml-auto text-xs text-gray-500">22%</span>
        </a>

        <a
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
            selectedOption === "Tests"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          href="tests"
          onClick={() => onOptionClick("Tests")}
        >
          <ChartNoAxesColumnIcon className="h-4 w-4" />
          <span>Tests</span>
        </a>

        <a
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
            selectedOption === "Executive report"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          href="report"
          onClick={() => onOptionClick("Executive report")}
        >
          <Shield className="h-4 w-4" />
          <span>Executive report</span>
        </a>

        <a
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
            selectedOption === "Compliance"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          href="compliance"
          onClick={() => onOptionClick("Compliance")}
        >
          <ShieldCheck className="h-4 w-4" />
          <span>Compliance</span>
        </a>

        <a
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
            selectedOption === "Trust Center"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          href="trust"
          onClick={() => onOptionClick("Trust Center")}
        >
          <CircleAlertIcon className="h-4 w-4" />
          <span>Trust Center</span>
        </a>

        <a
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
            selectedOption === "Risk"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          href="risk"
          onClick={() => onOptionClick("Risk")}
        >
          <CircleAlertIcon className="h-4 w-4" />
          <span>Risk</span>
        </a>

        <a
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
            selectedOption === "Vendor"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          href="vendor"
          onClick={() => onOptionClick("Vendor")}
        >
          <Building2Icon className="h-4 w-4" />
          <span>Vendor</span>
        </a>

        <a
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
            selectedOption === "Assets"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          href="assets"
          onClick={() => onOptionClick("Assets")}
        >
          <HardDriveIcon className="h-4 w-4" />
          <span>Assets</span>
        </a>

        <a
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
            selectedOption === "Assets"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          href="personnel"
          onClick={() => onOptionClick("Assets")}
        >
          <Users2 className="h-4 w-4" />
          <span>Personnel</span>
        </a>

        <a
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
            selectedOption === "Assets"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          href="integrations"
          onClick={() => onOptionClick("Assets")}
        >
          <Cable className="h-4 w-4" />
          <span>Integrations</span>
        </a>
      </nav>

      <div className="p-4 mt-auto">
        <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-gray-300 bg-white shadow-sm hover:bg-gray-100 h-9 px-4 py-2 w-full justify-start text-gray-700">
          <House className="h-4 w-4 mr-2" />
          Reset account
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
